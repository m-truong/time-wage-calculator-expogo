import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    label: {
        flex: 1,
        alignSelf: 'baseline',
        // Centers Text vertically 
        justifyContent: 'center',
    },
})

const MainScreenLabel = ({ text, padding }) => {
    return (
        // ** Fix was to wrap it in a <View> Container!
        <View style={styles.label}>
            <Text
                style={{
                    color: 'black',
                    fontSize: 20,
                    fontFamily: 'Helvetica',
                    paddingTop: 14,
                    paddingLeft: 14,
                    paddingRight: padding,
                }}
            >
                {text}
            </Text>
        </View>
    )
}

MainScreenLabel.defaultProps = {

}

export default MainScreenLabel;