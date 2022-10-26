import React, { useEffect, useState } from 'react';
import Navigation from './src/Navigation';
import axios from 'axios';
import { getAll } from './src/services/axios';

const App = () => {

  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      return getAll();
    }
    const data = fetch();
    
    console.log(data);
  }, []);

  return <Navigation/>;
}

export default App;