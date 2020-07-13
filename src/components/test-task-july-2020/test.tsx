import React from 'react';
import dataJSON from './data.json';
import { useTestStyles } from './test-styles';
import { Folder } from './subcomponents/folder';

interface IProps {
  expandedFolders: string[];
}

const FolderTree: React.FC<IProps> = props => {
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

export default FolderTree;
