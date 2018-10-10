import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import { styles } from '../../style/containers/adduser.js';
import data from '../../data/data.json';
import SearchInput, { createFilter } from 'react-native-search-filter';
import consts from './mapconstants';

export default class Profilelist extends Component {
  constructor(props) {
        super(props);
        this.state = { searchTerm:'',searchTermStatus: false}
    }
    searchUpdated(term) {
      this.setState({ searchTerm: term })
      if (term == '') {this.setState({searchTermStatus:false})}
    }

    animate =(user)=> {
      this.setState({searchTermStatus:false})
      this.props.animate(user)
    }
    render() {
      const filteredUser = data.filter(createFilter(this.state.searchTerm, consts.KEYS_TO_FILTERS))
      return(
        <View>
           <SearchInput
                 onChangeText={(term) => { this.searchUpdated(term) }}
                 style={ styles.searchInput }
                 onFocus={()=>this.setState({searchTermStatus:true})}
                 placeholder="name or email"
                 onSubmitEditing={()=>this.setState({searchTermStatus:false})}
           />
           {(this.state.searchTermStatus == true) &&
           <ScrollView>
             {filteredUser.map(user => {
               return (
                 <TouchableOpacity
                     onPress={()=> this.animate(user)}
                     key={Math.random()}
                     style={styles.emailItem}>
                        <Text style={styles.margin}>{user.name.last}</Text>
                 </TouchableOpacity>
               )})}
           </ScrollView>
          }
          </View>
        );
    }
}
