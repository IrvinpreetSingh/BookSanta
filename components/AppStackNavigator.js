import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import BookDonateScreen from '../screens/BookDonateScreen';
import ReceiverDetailsScreen  from '../screens/ReceiverDetailsScreen';




export const AppStackNavigator = createStackNavigator({
  BookDonateList : {
    screen : BookDonateScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  receiverDetails : {
    screen : ReceiverDetailsScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'BookDonateList'
  }
);