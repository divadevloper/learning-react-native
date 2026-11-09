import { View, Text } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind"
const SafeAreaView = styled(RNSafeAreaView)

const SubscriptionDetails = () => {
    const {id} = useLocalSearchParams<{ id: string }>()
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text>subcription Details: {id}  </Text>
      <Link href="/" > Go back</Link>
    </SafeAreaView>
  )
}

export default SubscriptionDetails 