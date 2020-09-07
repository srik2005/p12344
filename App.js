
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer ,createSwitchNavigator } from 'react-navigation';
import {createBottomTabNavigator}from 'react-navigation-tabs';
import TransactionScreen from './screens/BookTransaction'
import SearchScreen from './screens/SearchScreen';
import LoginScreen from './screens/LoginScreen'
export default class App extends React.Component {
  render(){
  return (
  <AppContainer/>
  );
}
}
const TabNavigator= createBottomTabNavigator({
  Transaction:{screen:TransactionScreen},
  Search:{screen:SearchScreen}
},
{
defaultNavigationOptions: ({navigation})=>({
  tabBarIcon: ()=>{
    const routeName = navigation.state.routeName;
    console.log(routeName)
    if(routeName === "Transaction"){
      return(
        <Image
        source={require("./assets/icon.png")}
        style={{width:40, height:40}}
      />
      )

    }
    else if(routeName === "Search"){
      return(
        <Image
        source={require("./assets/icon.png")}
        style={{width:40, height:40}}
      />)

    }
  }
})
}
);

const switchNavigator = createSwitchNavigator({
LoginScreen:{screen: LoginScreen},
TabNavigator:{screen: TabNavigator}
})
const AppContainer= createAppContainer(TabNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
