import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SearcScreen from './src/screens/SearchScreen';
import ResultsScreen from './src/screens/ResultsScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen 
          name="Search" 
          component={SearcScreen} 
          options={{ title: 'Business Search' }} 
        />

        <Stack.Screen 
          name="Results" 
          component={ResultsScreen} 
          options={{ title: 'Results' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;