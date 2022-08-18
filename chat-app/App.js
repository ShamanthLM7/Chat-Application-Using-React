import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './scrrens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './scrrens/Register';
import Home from './scrrens/Home';
import ChatBox from './scrrens/ChatBox';
const stack = createNativeStackNavigator()

const globalScreenOptions={
  headerStyle:{backgroundColor:"#A020F0"},
  headerTitleStyle:{color:"white"},
  headerTitleAlign:'center',
  headerTintColor:"white",

};
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator  screenOptions={globalScreenOptions}>
      <stack.Screen name='Login' component={Login}/>
      <stack.Screen name='Register' component={Register}/>
      <stack.Screen name='Home' component={Home}/>
      <stack.Screen name='ChatBox' component={ChatBox}/>
      </stack.Navigator>
      
     
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
