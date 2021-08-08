import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './Src/Screens/Home.js';
import ProfileScreen from './Src/Screens/Profile';

const Navigatator = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Test App',
    },
  },
);

export default createAppContainer(Navigatator);
