import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
    text: {
        // flex: 1,
        color: 'black',
        fontSize: 16, // 18
        fontFamily: 'Helvetica',
        textDecorationLine: "underline",
        // Note: Changing Margin might better improve the multi-line issue
        marginLeft: 260, // 290
        // alignSelf: 'flex-end',
        // justifyContent: 'flex-end',
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
