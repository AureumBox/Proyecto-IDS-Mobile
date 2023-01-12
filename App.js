import React from 'react';
import Navigation from './src/navigation/Navigation';
import { store } from './src/state/store';
import { Provider as StoreProvider } from 'react-redux';

const App = () => {
  return (
    <StoreProvider store={store}>
      <Navigation />
    </StoreProvider>
  );
}

export default App;