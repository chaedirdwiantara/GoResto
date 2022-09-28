/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import React from 'react';
import Explore from './src/views/Explore';
import Profile from './src/views/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Restaurants from './src/views/Restaurants';
import Restaurant from './src/views/Restaurant';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExploreIcon from './src/assets/icons/ExploreIcon';
import RestaurantIcon from './src/assets/icons/RestaurantIcon';
import ProfileIcon from './src/assets/icons/ProfileIcon';
import LoginScreen from './src/views/Login';
import SignUpScreen from './src/views/Signup';

export type RootStackParams = {
  AuthStack: undefined;
  ExploreStack: undefined;
  RestaurantsStack: NavigatorScreenParams<RestaurantsStackParams> ;
  Profile: undefined;
  Restaurant:{
    name: string;
  };
}

const RootStack = createBottomTabNavigator<RootStackParams>()

export type RestaurantsStackParams = {
  Restaurants: undefined
  Restaurant:{
    name: string;
  };
}

export type ExploreStackParams = {
  Explore: undefined
  Restaurant:{
    name: string;
  };
}

const RestaurantsStack = createNativeStackNavigator<RestaurantsStackParams>()
const RestaurantScreenStack: () => React.Node = () => {
  return (
      <RestaurantsStack.Navigator initialRouteName="Restaurants">
        <RestaurantsStack.Screen name="Restaurant" component={Restaurant} 
          options={{
            headerShown: false
          }}
        />
        <RestaurantsStack.Screen name="Restaurants" component={Restaurants} 
          options={{
            headerShown: false
          }}
        />
      </RestaurantsStack.Navigator>      
  );
};

const ExploreStack = createNativeStackNavigator<ExploreStackParams>()
const ExploreScreenStack: () => React.Node = () => {
  return (
      <ExploreStack.Navigator initialRouteName="Explore">
        <ExploreStack.Screen name="Explore" component={Explore} 
        options={{
          headerShown: false
        }}
        />
        <ExploreStack.Screen name="Restaurant" component={Restaurant} 
        options={{
          headerShown: false
        }}
        />
      </ExploreStack.Navigator>      
  );
};

export type AuthStackParams = {
  Login: undefined;
  SignUp: undefined;
}
const AuthStack = createNativeStackNavigator()
const AuthScreenStack = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name='Login' component={LoginScreen}  options={{
          headerShown: false
        }}/>
      <AuthStack.Screen name='SignUp' component={SignUpScreen}  options={{
          headerShown: false
        }}/>
    </AuthStack.Navigator>
  )
}

const App: () => React.Node = () => {

  const renderContent = () => {
    const isLoggedIn = true
    if (isLoggedIn){
      return(
        <RootStack.Navigator 
        initialRouteName="ExploreStack"
        > 
          <RootStack.Screen name="ExploreStack" component={ExploreScreenStack} 
            options={{
              tabBarIcon: ({color, size}) => <ExploreIcon color={color} size={size}/>,
              tabBarLabel: "Explore",
              headerShown: false
            }}
          />
          <RootStack.Screen name="RestaurantsStack" component={RestaurantScreenStack} 
            options={{
              tabBarIcon: ({color, size}) => <RestaurantIcon color={color} size={size}/>,
              tabBarLabel: "Restaurants",
              headerShown: false
            }}
          />
          <RootStack.Screen name="Profile" component={Profile} 
            options={{
              tabBarIcon: ({color, size}) => <ProfileIcon color={color} size={size}/>,
              tabBarLabel: "Profile",
              headerShown: false
            }}
          />
        </RootStack.Navigator>)
    }

    return <AuthScreenStack />
  }

  

  return (
    <NavigationContainer> 
        {renderContent()}
    </NavigationContainer>
      
  );
};



export default App;
