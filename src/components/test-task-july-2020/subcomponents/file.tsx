import React from 'react';
import { useTestStyles } from '../test-styles';
import classNames from 'classnames';
import FileCopyIcon from '@material-ui/icons/FileCopy';

interface IProps {
  name: string;
  mime?: string;
  isOpen: boolean;
}

export const File: React.FC<IProps> = ({ name, mime, isOpen }) => {
  const classes = useTestStyles();

  return (
    <div className={classNames({ [classes.hide]: !isOpen })}>
      <FileCopyIcon fontSize={'small'} color={'secondary'} />
      <span>{`${name}__${mime}`}</span>
    </div>
  );
};
