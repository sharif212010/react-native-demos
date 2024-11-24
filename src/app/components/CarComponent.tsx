import { View, Text, Image, Button } from 'react-native'
import React from 'react'

const CarComponent = () => {
    const price =200000
const carname="Lamborghini eventedour"
const imagepath="../assets/images/car.jpg"
  return (
    <View>
      <Text>CarComponent</Text>
      <Text>${price}</Text>
      <Image source={require(imagepath)} style={{height:200,width:200}} />
      <Text>{}</Text>
      <Text> Here is some random car description</Text>
      <Button title='ADD TO CART' onPress={() =>{alert("your item is added to the cart")}}/>
    </View>
  )
}

export default CarComponent