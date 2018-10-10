import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import Profiledetail from '../profiledetails';
import App from '../components/index';

export const Route = StackNavigator({
    App:{screen: App},
    Profiledetail:{screen:Profiledetail}
  },{
    title:'',
    headerMode:'float'
  })
