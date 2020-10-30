import React from 'react';
import { View, StyleSheet } from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import PeopleDetailsPage from './src/pages/PeopleDetailsPage';
import PeoplePage  from './src/pages/PeoplePage'
const Stack = createStackNavigator();
//const Drawer = createDrawerNavigator();
function App(){
  return(
    <View style={style.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="PeoplePage">
          <Stack.Screen name="Lista de Pessoas" component={PeoplePage} />
          <Stack.Screen name="Detalhe da Pessoa" component={PeopleDetailsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

const style = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff' 
    }
  }
)

export default App;
