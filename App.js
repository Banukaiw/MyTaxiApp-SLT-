import React from 'react';

import BottomNav from './components/bottom-nav';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (

    <SafeAreaProvider>
      <BottomNav />
   
    </SafeAreaProvider>
  );
};

export default App;