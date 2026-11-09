import { View, Text } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind"
const SafeAreaView = styled(RNSafeAreaView)

const signUp= () => {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text>sign-up</Text>
            <Link href="/(auth)/sign-in">SignIn </Link>
      
    </SafeAreaView>
  )
}

export default signUp