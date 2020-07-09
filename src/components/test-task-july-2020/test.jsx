import React, { useCallback, useState } from 'react';
import dataJSON from './data.json';
import FolderIcon from '@material-ui/icons/Folder';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { makeStyles } from '@material-ui/core/styles';
import { createStyles } from '@material-ui/core';
import classNames from 'classnames';

const Folder = props => {
  const { data, isPropsOpen, expandedFolders } = props;
  const classes = useTestStyles();

  const [isOpen, setIsOpen] = useState(expandedFolders.includes(data.name));
  const handleOpen = useCallback(() => setIsOpen(isOpen => !isOpen), [setIsOpen]);

  if (data.type === 'FILE') {
    return <File name={data.name} mime={data.mime} isOpen={isPropsOpen} />;
  }

  return (
    <div className={classNames({ [classes.flex]: true, [classes.hide]: !isPropsOpen })}>
      <FolderIcon fontSize={'small'} color={'primary'} />
      <span onClick={handleOpen}>{`${data.name} >`}</span>
      <div>
        {data.children.map((child, i) => (
          <Folder key={data.name + i} data={child} isPropsOpen={isOpen} expandedFolders={expandedFolders} />
        ))}
      </div>
    </div>
  );
};

const File = ({ name, mime, isOpen }) => {
  const classes = useTestStyles();

  return (
    <div className={classNames({ [classes.hide]: !isOpen })}>
      <FileCopyIcon fontSize={'small'} color={'secondary'} />
      <span>{`${name}__${mime}`}</span>
    </div>
  );
};

export const FolderTree = props => {
  const { expandedFolders } = props;
  const classes = useTestStyles();

  return (
    <>
      <h2>Folder tree</h2>
      <div>Opened folder list: {expandedFolders.join(', ')}</div>
      {dataJSON.map((data, index) => (
        <div key={index} className={classes.flex}>
          <Folder data={data} isPropsOpen={true} expandedFolders={expandedFolders} />
        </div>
      ))}
    </>
  );
};

const useTestStyles = makeStyles(() =>
  createStyles({
    flex: {
      display: 'flex',
      backgroundColor: 'rgba(209,219,224, .2)',
    },
    hide: {
      display: 'none',
    },
    searchIcon: {
      color: 'rgba(100, 100, 100, .7)',
      border: `1px solid silver`,
    },
  })
);
