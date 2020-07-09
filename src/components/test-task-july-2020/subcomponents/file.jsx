import { useTestStyles } from '../test-styles';
import classNames from 'classnames';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import React from 'react';

export const File = ({ name, mime, isOpen }) => {
  const classes = useTestStyles();

  return (
    <div className={classNames({ [classes.hide]: !isOpen })}>
      <FileCopyIcon fontSize={'small'} color={'secondary'} />
      <span>{`${name}__${mime}`}</span>
    </div>
  );
};
