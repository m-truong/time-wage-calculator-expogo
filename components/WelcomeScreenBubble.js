import React from 'react'
import { View, Text } from 'react-native'

// This syntax is object destructuring in JavaScript. It is commonly used in React components, especially in functional components or hooks, to extract specific properties from an object.
// This is often seen in function arguments, particularly in React props.
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
