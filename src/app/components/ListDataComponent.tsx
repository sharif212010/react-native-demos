import { View, Text, Image, Button, FlatList } from 'react-native'
import React from 'react'

const ListDataComponent = () => {
    const Fruits = ["mango", "apple", "pineapple", "avocado", "strawberry", "orange"]
    return (
        <View>

            <Text>List of Fruits </Text>
            <FlatList data={Fruits} renderItem={(fruit) => {
                return <Text>{fruit.item}</Text>
            }}
            />


        </View>


    )


}

export default ListDataComponent