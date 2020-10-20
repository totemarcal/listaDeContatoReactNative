import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PeoplePage from './src/pages/PeoplePage'
import PeopleDetailsPage from './src/pages/PeopleDetailsPage'
import { createDrawerNavigator } from '@react-navigation/drawer';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function App() {
  return (  
    <View style={styles.container}>
        <NavigationContainer >
          <Stack.Navigator>
            <Stack.Screen name="Lista de Pessoas" component={PeoplePage} />
            <Stack.Screen name="Detalhe da Pessoa" component={PeopleDetailsPage} />
          </Stack.Navigator>
          </NavigationContainer>
          <NavigationContainer >
          <Drawer.Navigator initialRouteName="PeoplePage">
            <Drawer.Screen name="Lista de Pessoas" component={PeoplePage} />
            <Drawer.Screen name="Detalhe da Pessoa" component={PeopleDetailsPage} />
          </Drawer.Navigator>
        </NavigationContainer>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


export default App;