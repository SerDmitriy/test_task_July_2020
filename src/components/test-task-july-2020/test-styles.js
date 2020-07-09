import { makeStyles } from '@material-ui/core/styles';
import { createStyles } from '@material-ui/core';

export const useTestStyles = makeStyles(() =>
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
