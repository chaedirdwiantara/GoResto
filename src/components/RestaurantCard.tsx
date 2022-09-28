import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

interface Props {
    name: string;
    onPress: (name: string) => void
}

const RestaurantCard: React.FC<Props> = ({name, onPress}) => {
  return (
    <TouchableOpacity
        onPress={() => onPress(name)}
    >
      <View style={styles.container}>
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#efefef',
        marginBottom: 6,
        padding: 8,
    }
})