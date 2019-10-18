import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Provider } from './src/context/BlogContext'
import IndexScreen from './src/screens/IndexScreen';
import BlogScreen from './src/screens/BlogScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';


const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Blog: BlogScreen,
    Create: CreateScreen,
    Edit: EditScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blog List'
    }
  }
);
const App = createAppContainer(navigator);

export default () => {
  return <Provider>
    <App />
  </Provider>;
};

