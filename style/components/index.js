import {StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    textstyle:{
        margin:2,
        color:'black',
        fontSize:10,
        fontWeight:'bold'
    },
    modal: {
      borderRadius:10,
      backgroundColor:'white',
      flex:1
    },
    modalview: {
      flex:1,
      flexDirection:'column'
    },
    closebutton: {
      flex:0.09,
      borderRadius:5,
      backgroundColor:'#7f0000',
      justifyContent:'center',
      alignItems:'center'
    },
    closetext: {
      textAlign:'center',
      color:'white',
      fontWeight:'bold'
    },
    interestview: {
      margin:10,
      flexDirection:'row'
    },
    profileicon: {
       width: 120,
       height: 120,
       borderRadius:60
    },
    interestCover: {
       marginTop:5,
       marginLeft:10,
       flexDirection:'row'
    },
    interesticon: {
       width:100,
       height:100,
       borderRadius:50
    },
    margin:{
      margin:10
    },
    interestscroll :{
       height:100
     }
});
