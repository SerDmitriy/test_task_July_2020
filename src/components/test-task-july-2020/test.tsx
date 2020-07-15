import React from 'react';
import dataJSON from './data.json';
import { useTestStyles } from './test-styles';
import { Folder } from './subcomponents/folder';
import { firstTask } from 'components/test-task-july-2020/subcomponents/first-task';
import { secondTask } from 'components/test-task-july-2020/subcomponents/second-task';

interface IProps {
  expandedFolders: string[];
}

const FolderTree: React.FC<IProps> = props => {
  const { expandedFolders } = props;
  const classes = useTestStyles();

  return (
    <>
      <h3>Tasks results in console</h3>
      <button onClick={firstTask}>First task btn</button>
      <button onClick={secondTask}>Second task btn</button>
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
