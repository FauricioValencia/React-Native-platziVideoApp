import React, { Component } from 'react';
import {
  FlatList,
  Text,
  StyleSheet,
  View, 
  Image
} from 'react-native';

function HorizontalSeparator(props){
  return(
    <View
    style={styles.separator}
    />
  )
}
const styles={
  separator:{
    flex:1,
    marginHorizontal:5
  }
}
export default HorizontalSeparator;