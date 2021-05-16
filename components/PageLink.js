import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 16, // 18
        fontFamily: 'Helvetica',
        textDecorationLine: "underline",
        // Note: Changing Margin might better improve the multi-line issue
        marginLeft: 260, // 290
    },
})

const PageLink = ({ text, navigation }) => {
    return (
        <View>
            <TouchableOpacity
                style={styles.position}
                onPress={() => { navigation.navigate("MainScreen") }}
            >
                <Text style={styles.text}>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

PageLink.defaultProps = {

}

export default PageLink;
