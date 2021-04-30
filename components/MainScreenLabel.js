import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'baseline',
        // Centers Text vertically 
        justifyContent: 'center',
        // debugging borders
        // borderStyle: 'solid',
        // borderColor: 'black',
        // borderWidth: 1,
    },
    text: {
        color: 'black',
        fontSize: 22,
        fontFamily: 'Helvetica',
        paddingTop: 14,
        paddingLeft: 1,
        paddingRight: 45,
        // textAlign: 'center',
    },
})

const MainScreenLabel = ({ text, padding }) => {
    return (
        // ** Fix was to wrap it in a <View> Container!
        <View style={styles.container}>
            <Text
                style={{
                    color: 'black',
                    fontSize: 20,
                    fontFamily: 'Helvetica',
                    paddingTop: 14,
                    paddingLeft: 14,
                    paddingRight: padding,
                    // textAlign: 'center',
                }}
            >
                {text}
            </Text>
        </View >
    )
}

MainScreenLabel.defaultProps = {

}

export default MainScreenLabel;