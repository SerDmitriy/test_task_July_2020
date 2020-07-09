import { useTestStyles } from '../test-styles';
import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import FolderIcon from '@material-ui/icons/Folder';
import { File } from './file';

export const Folder = props => {
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
