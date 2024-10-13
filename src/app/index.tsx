import { View , Text} from 'react-native'
import React from 'react'
import TextComponent from './components/TextComponent'
import NameComponent from './components/NameComponent'
import AgeComponent from './components/AgeComponent'
import FavSubjectComponent from './components/FavSubjectComponent'
import GreetComponent from './components/GreetComponent'
import DynamicContentComponent from './components/DynamicContentComponent'

const Index = () => {
    return (
        <View>
            <DynamicContentComponent />
            {/* <TextComponent />
             <NameComponent />
              <AgeComponent />
               <FavSubjectComponent />
                <GreetComponent /> */}
        </View>
    )
}

export default Index