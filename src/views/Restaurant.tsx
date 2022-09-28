import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RestaurantCard, TopBackNavigation } from '../components'
import { RootStackParams } from '../../AppTabNavigator'

type Props = NativeStackScreenProps<RootStackParams, "Restaurant">

const Restaurant = ({route, navigation}: Props) => {
  return (
    <View style={styles.container}>
      <TopBackNavigation />
      <Text style={styles.screenTitle}>{route.params.name}</Text>

      <Text>Related restaurants</Text>     
      <RestaurantCard name="Susana 1" onPress={() => {
        navigation.push("Restaurant",{name: "Susana 1"})
      }}/> 
      <RestaurantCard name="Susana 2"onPress={() => {
        navigation.push("Restaurant",{name: "Susana 2"})
      }}/> 
      <RestaurantCard name="Susana 3"onPress={() => {
        navigation.push("Restaurant",{name: "Susana 3"})
      }}/> 
    </View>
  )
}

export default Restaurant

const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginTop: 24,
    },
    screenTitle: {
        fontSize:16,
        marginBottom: 8,
        fontWeight: 'bold'
    }
})