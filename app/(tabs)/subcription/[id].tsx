import { View, Text } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'

const subcriptionDetails  = () => {
    const {id} = useLocalSearchParams<{ id: string }>()
  return (
    <View>
      <Text>subcription Details: {id}  </Text>
      <Link href="/" > Go back</Link>
    </View>
  )
}

export default subcriptionDetails 