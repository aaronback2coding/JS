import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import SearchScreen from './src/screens/SearchScreen';
import PDPScreen from './src/screens/PDPScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    PDP: PDPScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search'
    }
  }
);

export default createAppContainer(navigator);


