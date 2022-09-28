import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {useNavigation} from "@react-navigation/native"
import ProfileIcon from '../assets/icons/ProfileIcon'
import { AuthStackParams } from '../../AppTabNavigator'

const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParams>>()
  return (
    <View>
      <Text>Login Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <ProfileIcon color='#333' size={20}/>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})