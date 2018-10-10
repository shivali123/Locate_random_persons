import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    ActivityIndicator
} from 'react-native';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {styles} from '../../style/components/profiledetail.js';

import * as Actions from '../actions/profileintrests';

class Home extends Component {
      static navigationOptions = ({ navigation }) => ({
      headerTitle     : "Name",
      headerStyle     : {backgroundColor: 'grey'},
      headerTintColor : 'white',
    })
    constructor(props) {
        super(props);
        this.state = {
        };
        this.renderItem = this.renderItem.bind(this);
    }

    componentDidMount() {
        this.props.getData();
    }

    render() {
        if (this.props.loading) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true}/>
                </View>
            );
        } else {
            return (
                <View style={{flex:1, paddingTop:20}}>
                    <FlatList
                        ref='listRef'
                        data={this.props.data}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index} />
                </View>
            );
        }
    }

    renderItem({item, index}) {
        return (
            <View style={styles.row}>
                <Text style={styles.title}>
                    {(parseInt(index) + 1)}{". "}{item.id}
                </Text>
                <Text style={styles.description}>
                    {item.id}
                </Text>
            </View>
        )
    }
};

function mapStateToProps(state, props) {
    return {
        loading: state.dataReducer.loading,
        data: state.dataReducer.data
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
