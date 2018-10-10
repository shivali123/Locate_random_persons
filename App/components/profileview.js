import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import Modal from "react-native-modal";
import {styles} from '../../style/components/index.js';
import Profilebasics from './profilebasics';

export default class Profileview extends Component {
  constructor(props) {
        super(props);
        this.state = { modalVisible:false }
    }

  toggelModal =()=> { this.props.toggelModal(!this.props.modalVisible) }

  lapsList() {
      return this.props.interests.map((interest) => {
        return (
          <View key = { Math.random() } style={ styles.interestCover }>
            <Image
              style={styles.interesticon}
              resizeMode="cover"
              source={{uri: interest[0].image}}
            />
            <Text style={[styles.textstyle,styles.margin]}>{interest[0].hobby}</Text>
          </View>
        )
      })
    }

    render() {
      let users = this.props.users;
      return (
        <Modal
          animationType="slide"
          style={styles.modal}
          visible={this.props.modalVisible}>
            <View
              style={styles.modalview}>
               <TouchableOpacity
                  onPress={this.toggelModal}
                  style={styles.closebutton}>
                   <Text style={styles.closetext}>CLOSE</Text>
               </TouchableOpacity>
               <Profilebasics
                  userDetail={this.props.userDetail} />
               <ScrollView
                  style={styles.interestscroll}>
                  {this.lapsList()}
               </ScrollView>
            </View>
       </Modal>
        );
    }
}
