import { View, Text, Image } from 'react-native'
import React from 'react'

const ProductsComponent = () => {
    interface Product{
        image:string;
        name:string;
        rating:number;
        price:number;
    }
    const Products = [
        {
            image: "https://picsum.photos/200/300?random=1",
            name: "Product 1",
            rating: 4.5,
            price: 29.99,
        },
        {
            image: "https://picsum.photos/200/300?random=1",
            name: "Product 2",
            rating: 4.7,
            price: 31.5,
        },
        {
            image: "https://picsum.photos/200/300?random=1",
            name: "Product 3",
            rating: 4.1,
            price: 23.2,
        },
        {
            image: "https://picsum.photos/200/300?random=1",
            name: "Product 4",
            rating: 4.9,
            price: 41.61,
        },
        {
            image: "https://picsum.photos/200/300?random=1",
            name: "Product 5",
            rating: 3.2,
            price: 25.99,
        },
        {
            image: "https://picsum.photos/200/300?random=1",
            name: "Product 6",
            rating: 4.4,
            price: 26.25,
        },
        {
            image: "https://picsum.photos/200/300?random=1",
            name: "Product 7",
            rating: 4.5,
            price: 39.99,
        }
    
    ]

    const product = ({item}: {item:Product}) => {
        return (
            <View>
                <Image source={{uri:item.image}}/>
                <Text> {item.name}</Text>
            </View>
        )
    }

  return (
    <View>
      <Text>ProductsComponent</Text>
    </View>
  )
}

export default ProductsComponent