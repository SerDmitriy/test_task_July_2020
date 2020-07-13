import React, { Suspense } from 'react';
import './App.css';
import { Main } from 'components';

const LoaderFallback = <h1>+++LoaderFallback+++</h1>;

function App() {
  return (
    <Suspense fallback={LoaderFallback}>
      <Main />
    </Suspense>
  );
}

export default App;
