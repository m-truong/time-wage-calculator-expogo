import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import MyButton from '../components/MyButton';
import PageLink from '../components/PageLink';
import IncomeInequalityImage from '../svg/IncomeInequalityImage'
import InfographicImage from '../svg/InfographicImage'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 15,
        paddingBottom: 30,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
    },
})

const InfoScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <PageLink
                text={"Skip Intro"}
                navigation={navigation}
            />
            {/* Update #4: Added new SVG images and replaced PNG images*/}
            <InfographicImage  />
            <Text style={styles.text}>
                Try this experiment with other expenses.
            </Text>
            {/* Update #5: Added new SVG images and replaced PNG images*/}
            <IncomeInequalityImage />
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
