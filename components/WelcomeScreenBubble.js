import React from 'react'
import { View, Text } from 'react-native'


const WelcomeScreenBubble = ({ text, textStyle, background }) => {
    return (
        <View style={background}>
            <Text style={textStyle}>{text}</Text>
        </View>
    )
}

WelcomeScreenBubble.defaultProps = {

}

export default WelcomeScreenBubble;
