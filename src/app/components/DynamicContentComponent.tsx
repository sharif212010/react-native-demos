import { View, Text } from 'react-native'
import React from 'react'

const DynamicContentComponent = () => {
  const username ="Abdullah Hisham Alsharif"
  let me = {name: "Abdullah Alsharif" ,age:15 ,grade: "grade nine" }
  return (
    <View>
      <Text>My Name Is {
        username
        }</Text>
        <Text>
          my name is  {me.name}, i am {me.age} years old,i am in {me.grade}
        </Text>
    </View>
  )
}

export default DynamicContentComponent