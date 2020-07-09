import React from 'react';
import { FolderTree } from './test-task-july-2020/test';
import { expandedFolders } from './test-task-july-2020/expandedFolders';

export const Main = () => {
  return <FolderTree expandedFolders={expandedFolders} />;
};
