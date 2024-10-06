import { View , Text} from 'react-native'
import React from 'react'
import TextComponent from './components/TextComponent'
import NameComponent from './components/NameComponent'
import AgeComponent from './components/AgeComponent'

const Index = () => {
    return (
        <View>
            <TextComponent />
             <NameComponent />
              <AgeComponent />
        </View>
    )
}

export default Index