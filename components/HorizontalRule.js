import React from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    line: {
        width: 170,
        alignSelf: 'flex-start',
        // Need to move Horizontal rule further to the left
        marginLeft: 10,
        borderColor: 'black',
        borderWidth: 0.5,
    }
})

const HorizontalRule = () => {
    return (
        <View style={styles.line}> 
        </View>
    )
}

export default HorizontalRule
