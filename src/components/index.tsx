import React from 'react';
import { expandedFolders } from 'components/test-task-july-2020/expandedFolders';

const FolderTree = React.lazy<React.ComponentType<any>>(async () => {
  return await import(/*webpackChunkName:'FolderTree'*/ './test-task-july-2020/test');
});

export const Main: React.FC = () => {
  return <FolderTree expandedFolders={expandedFolders} />;
};
