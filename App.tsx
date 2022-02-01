import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { AppNavigation } from './src/AppNavigation';
import { AuthScreen } from './src/screens/AuthScreen';
import { RootState, store } from './src/store/store';

const StartApp = () => {
  const isAuth = useSelector((state: RootState) => state.auth.value)
  return (isAuth ? <AppNavigation /> : <AuthScreen/>)
}

const App = () => {  
  return (
    <Provider store={store}>
      <StartApp></StartApp>    
    </Provider>      
  );
};

export default App;
