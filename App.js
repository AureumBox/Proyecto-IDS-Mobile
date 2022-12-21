import React from 'react';
import Navigation from './src/Navigation/Navigation';
import { Provider as StoreProvider } from 'react-redux';
import { store } from './src/state/store';

const App = () => {

  return (
    <StoreProvider store={store}>
      <Navigation />
    </StoreProvider>
  );
}

export default App;