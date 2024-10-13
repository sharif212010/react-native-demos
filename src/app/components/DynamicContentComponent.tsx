import { View, Text } from 'react-native'
import React from 'react'

const DynamicContentComponent = () => {
  const username ="Abdullah Hisham Alsharif"
  return (
    <View>
      <Text>My Name Is {
        username
        }</Text>
    </View>
  )
}

export default DynamicContentComponent