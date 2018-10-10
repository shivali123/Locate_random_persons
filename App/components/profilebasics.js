import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import {styles} from '../../style/components/index.js';

export default class Profilebasics extends Component {
    render() {
      return(
        <View style={styles.interestview}>
            <Image
            style={styles.profileicon}
            source={{uri: this.props.userDetail.picture.medium}}
            />
            <View style={{flexDirection:'column'}}>
                <Text style={styles.textstyle}>Name: {this.props.userDetail.name.title} {this.props.userDetail.name.first} {this.props.userDetail.name.last}</Text>
                <Text style={styles.textstyle}>Gender: {this.props.userDetail.gender} </Text>
                <Text style={styles.textstyle}>Date of birth: {this.props.userDetail.dob} </Text>
                <Text style={styles.textstyle}>Phone no: {this.props.userDetail.phone} </Text>
                <Text style={styles.textstyle}>Cell no: {this.props.userDetail.cell} </Text>
                <Text style={styles.textstyle}>Registered on: {this.props.userDetail.registered} </Text>
                <Text style={styles.textstyle}>Username: {this.props.userDetail.username} </Text>
            </View>
        </View>
      )
    }
}
