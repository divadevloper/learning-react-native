import { View, Text } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const signUp= () => {
  return (
    <View>
      <Text>sign-up</Text>
            <Link href="/(auth)/sign-in">SignIn </Link>
      
    </View>
  )
}

export default signUp