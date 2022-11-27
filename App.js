import React from 'react';
import Navigation from './src/navigation/Navigation';
import { Provider } from 'react-redux';
import { store } from './src/state/store';

const App = () => {

  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
    );
}

export default App;