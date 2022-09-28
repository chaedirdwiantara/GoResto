import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { RestaurantCard } from '../components'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootStackParams } from '../../AppTabNavigator'

type Props = NativeStackScreenProps<RootStackParams, "RestaurantsStack">

const Restaurants = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Restaurant</Text>
      <ScrollView>
        <RestaurantCard name="Tutut Restaurant"
         onPress={name => {
          navigation.navigate('Restaurant', {name})
          }}
        />
        <RestaurantCard name="Ketoprak Restaurant"
          onPress={name => {
            navigation.navigate('Restaurant', {name})
            }}
        />
        <RestaurantCard name="Nasi Kuning Restaurant"
          onPress={name => {
          navigation.navigate('Restaurant', {name})
          }}
        />
        <RestaurantCard name="Gado-Gado Restaurant"
          onPress={name => {
          navigation.navigate('Restaurant', {name})
          }}
        />
        <RestaurantCard name="Gudeg Restaurant"
          onPress={name => {
          navigation.navigate('Restaurant', {name})
          }}
        />
        <RestaurantCard name="Bakso Restaurant"
          onPress={name => {
          navigation.navigate('Restaurant', {name})
          }}
        />
      </ScrollView>
    </View>
  )
}

export default Restaurants

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