import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind"
const SafeAreaView = styled(RNSafeAreaView)

const signIn = () => {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text>sign-in</Text>
      <Link href="/(auth)/sign-up"> create Acount</Link>
    </SafeAreaView >
  )
}

export default signIn