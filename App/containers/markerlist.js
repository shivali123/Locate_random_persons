import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import { styles } from '../../style/containers/adduser.js';
import MapView, { Marker, Callout } from 'react-native-maps';
var obj;

export default class Markerlist extends Component {

    render() {
      obj=this;
      let users = this.props.users;
      return(
        <View>
        {users.map(marker => (
          <Marker.Animated
              ref={marker => { this.marker = marker; }}
              pinColor={'#474744'}
              key={Math.random()}
              coordinate={marker.latlng}
              title={marker.user.name.first}
              description={marker.user.email}>
                <Callout tooltip={true} onPress={()=> obj.props.returnuser(marker.user)}>
                    <View
                      key={Math.random()}
                      style={styles.markerview}>
                        <Text style={styles.text}>{marker.user.name.first}</Text>
                        <Text style={styles.text}>{marker.user.username}</Text>
                        <Text style={styles.text}>lat: {marker.latlng.latitude.toString().slice(0,6)}</Text>
                        <Text style={styles.text}>long: {marker.latlng.longitude.toString().slice(0,6)}</Text>
                    </View>
                </Callout>
          </Marker.Animated>
        ))}
        </View>
        )
    }
}
