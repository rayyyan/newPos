import React from 'react'
import { View, Text, StyleSheet, TextInput} from 'react-native'

const Input = ({value, placeholder, secureTextEntry, cb, keyboardType}) => {
  return (
    <View style={StyleSheet.container}>
      <TextInput
      value={value}
      placeholder={placeholder}
      style={styles.Input}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      onChangeText={text => {cb(text);}
    }
      
      />
    </View>
  );
};
const styles=StyleSheet.create({
    container:{

    },
    input:{
        
    }
})
export default Input;