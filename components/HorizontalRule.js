import React from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    line: {
        width: 170,
        marginLeft: 20,
        borderColor: 'black',
        borderWidth: 0.5,
        alignSelf: 'flex-start',
    }
})

const HorizontalRule = () => {
    return (
        <View style={styles.line}> 
        </View>
    )
}

export default HorizontalRule
