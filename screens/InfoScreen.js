import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import MyButton from '../components/MyButton';
import PageLink from '../components/PageLink';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#fff',
        marginBottom: 40,
    },
    text: {
        fontSize: 19,
        fontFamily: 'Helvetica'
    }
})

const InfoScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <PageLink
                text={"Skip Intro"}
                navigation={navigation}
            />
            <Image
                source={require('../res/images/infographicImage.png')}
            />
            <Text style={styles.text}>
                Try this experiment with other expenses.
                </Text>
            <Image
                source={require('../res/images/incomeInequalityImage.png')}
            />
            <MyButton
                text={"Start"}
                navigation={navigation}
                screen={"MainScreen"}
            />
        </View>
    )
}

InfoScreen.defaultProps = {

}

export default InfoScreen;
