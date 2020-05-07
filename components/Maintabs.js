import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from './home';
import AboutScreen from './about';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
const TabNavigator = createBottomTabNavigator(
{
  Home: {
    screen: HomeScreen,
  },
  About: {
    screen: AboutScreen,
  },  
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Home') {
        iconName = `ios-home`;
      } else if (routeName === 'About') {
        iconName = `ios-bookmark`;
      }
      return <IconComponent name={iconName} size={30} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#F8F8F8',
    inactiveTintColor: '#586589',
    style: {
      backgroundColor: '#171F33',
      paddingTop: 12,
    },
  },
}
);

export default createAppContainer(TabNavigator);
