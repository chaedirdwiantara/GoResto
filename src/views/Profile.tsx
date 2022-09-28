import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Profile</Text>

      <Text>Name: Chaedir Dwiantara</Text>
      <TouchableOpacity>
        <Text>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile

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