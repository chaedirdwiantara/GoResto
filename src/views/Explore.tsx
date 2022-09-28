import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RestaurantCard from '../components/RestaurantCard'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootStackParams } from '../../AppTabNavigator'

type Props = NativeStackScreenProps<RootStackParams, "ExploreStack">

const Explore = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.screenTitle}>Restaurants</Text>
      <View>
        <Text style={styles.sectionTitle}>Restaurant Near You</Text>
        <RestaurantCard name="Tutut Restaurant" 
          onPress={name => {
          // navigation.navigate('Restaurant', {name})
          navigation.navigate('RestaurantsStack', 
          {screen: 'Restaurant',
           params: {name: 'Hello from explore'}
          })
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

        <Text style={styles.sectionTitle}>Restaurant Popular Rest</Text>
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
      </View>
    </View>
  )
}

export default Explore

const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginTop: 24,
    },
    sectionTitle:{
        fontSize: 16,
        marginTop: 16,
    },
    screenTitle: {
        fontSize:16,
        marginBottom: 8,
        fontWeight: 'bold'
    }
})