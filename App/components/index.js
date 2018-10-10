import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView
  } from 'react-native';

import data from '../../data/interests';
import Profileview from './profileview';
import AddUser from '../containers/adduser';

export default class App extends Component<Props> {
  static navigationOptions = {header:null}
  constructor(props) {
        super(props);
        this.state = { modalVisible:false, userDetail: {}, interests:[]}
  }

  returnuser = (user) => {
    let colledtedinterest = user.interest_ids.map(id => {
      let arr = []
      data.interests.map(interest =>{
        if(id == interest.id){
          arr.push(interest)
          }
        });
        return arr
     });
    this.setState({modalVisible: !this.state.modalVisible, userDetail: user, interests: colledtedinterest});
  }

  toggelModal =(state)=> { this.setState({modalVisible:state}) }

  render() {
    return (
      <View style={{flex:1}}>
          {(this.state.modalVisible != false) &&
          <Profileview
              userDetail={this.state.userDetail}
              modalVisible={this.state.modalVisible}
              interests={this.state.interests}
              toggelModal={this.toggelModal}/>
          }
          <AddUser returnuser={this.returnuser} navigation={this.props.navigation} />
      </View>
    );
  }
}
