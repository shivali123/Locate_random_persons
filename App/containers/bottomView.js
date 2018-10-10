import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

export default class BottomView extends Component {
    render() {
      let users = this.props.users;
        return (
          <TouchableOpacity
              style={{margin:10,flexDirection:'row'}}>
              <Image
              style={{width: 100, height: 100}}
              source={{uri: users[users.length-1].user.picture.medium}}
              />
                <View style={{flexDirection:'column'}}>
                    <Text style={{margin:2,color:'black',fontSize:10}}>Name:{users[users.length -1].user.name.title} {users[users.length -1].user.name.first} {users[users.length -1].user.name.last}</Text>
                    <Text style={{margin:2,color:'black',fontSize:10}}>Gender:{users[users.length -1].user.gender} </Text>
                    <Text style={{margin:2,color:'black',fontSize:10}}>Date of birth:{users[users.length -1].user.dob} </Text>
                    <Text style={{margin:2,color:'black',fontSize:10}}>Phone no:{users[users.length -1].user.phone} </Text>
                    <Text style={{margin:2,color:'black',fontSize:10}}>Cell no:{users[users.length -1].user.cell} </Text>
                    <Text style={{margin:2,color:'black',fontSize:10}}>location:{users[users.length -1].latlng.latitude},{users[users.length -1].latlng.longitude} </Text>
                </View>
            </TouchableOpacity>
        );
    }
}
