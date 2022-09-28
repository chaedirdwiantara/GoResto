import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import React from 'react'
import BackIcon from "../assets/icons/BackIcon"
import {useNavigation} from "@react-navigation/native"

const TopBackNavigation = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableHighlight 
        underlayColor={"#f0ddcc"}
        style={styles.backButton}
        onPress={() => {
            navigation.goBack()
        }}
        >        
        <BackIcon color='#3333' size={20}/>
      </TouchableHighlight>
    </View>
  )
}

export default TopBackNavigation

const styles = StyleSheet.create({
    container:{
        flexDirection: "row"
    },
    backButton:{
        borderRadius: 8,
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    }
})