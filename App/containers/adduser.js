
import React, {Component} from 'react';
import {
  View,
  Text,
  ToastAndroid,
  Platform,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { addUser } from '../actions';
import consts from './mapconstants';
import { styles } from '../../style/containers/adduser.js';
import { customStyle } from '../../style/customMapStyle';
import { initialRegion } from './initialregion';
import BottomView from './bottomView';
import Profilelist from './profilelist';
import Markerlist from './markerlist';

class AddUser extends Component {
  constructor(props) {
        super(props);
        this.state = {localstorage:[]};
  }

  renderprofile =(user)=> {
    let arr = this.state.localstorage
    var st = false
    const { coordinate } = this.state;
    arr.map(userCopy =>{
        if (user.name == userCopy.user.name ) {
          st = true
          ToastAndroid.showWithGravity('User is already located !', ToastAndroid.LONG,ToastAndroid.CENTER);
          return
        }
     })
    if (st == true) {return}
    const newCoordinate = {
          latitude: consts.LATITUDE + ((Math.random() - 0.25) * (consts.LATITUDE_DELTA / 2)),
          longitude: consts.LONGITUDE + ((Math.random() - 0.25) * (consts.LONGITUDE_DELTA / 2))
      };
    this.props.dispatch( addUser({
            type: 'ADD_USER',
            text: 'Test',
            id: consts.nextUserId++,
            latlng: newCoordinate,
            user:user
      }))
    if (Platform.OS === 'android') {
      if (this.marker) { this.marker._component.animateMarkerToCoordinate(newCoordinate, 500);}
    }
    else { coordinate.timing(newCoordinate).start();}
    this.state.localstorage.push({latlng:newCoordinate,user:user})
  }
 returnuser =(user)=>{
   this.props.returnuser(user)
 }
  render () {
    return(
        <View style={styles.container}>
           <Profilelist animate={this.renderprofile} dispatch={this.props.dispatch} />
           <MapView
              provider={this.props.provider}
              style={styles.map}
              loadingEnabled={true}
              customMapStyle={customStyle}
              initialRegion={initialRegion}>
              <Markerlist users={this.props.users} returnuser={this.returnuser} />
           </MapView>
           {(this.props.users.length > 0) &&
           <BottomView users={this.props.users} />
          }
       </View>
          );
        }
    }

export default connect((store) => store)(AddUser)
