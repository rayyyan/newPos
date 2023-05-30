import {  Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'



const Button = ({onPress, text}) => {
    return (
      <Pressable
        onPress={onPress}
        style={
          Styles.container
        }>
        <Text style={StyleSheet.text
         }>
          {text}
        </Text>
      </Pressable>
    );
  };
  const Styles = StyleSheet.create({
    // container: {
    //   alignItems: 'center',
    //   borderRadius: 10,
    //   marginVertical: 10,
    //   width: 340,
    //   height: 54,
    //   marginLeft: 19,
    //   padding: 15,
    //   marginTop: 20,
    //   borderWidth: 1,
    // },
  });
  export default Button;