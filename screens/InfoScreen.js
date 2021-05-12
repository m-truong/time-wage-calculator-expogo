import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import MyButton from '../components/MyButton';
import PageLink from '../components/PageLink';
import IncomeInequalityImage from '../svg/IncomeInequalityImage'
import InfographicImage from '../svg/InfographicImage'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#fff',
        marginBottom: 40,
        // Add border with white color 
    },
    text: {
        fontSize: 19,
        fontFamily: 'Helvetica'
    },
    // infoImage: {
    //     width: 200,
    //     height: 50,
    // }
})

const InfoScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <PageLink
                text={"Skip Intro"}
                navigation={navigation}
            />
            {/* Update #4: Added new SVG images and replaced PNG images*/}
            <InfographicImage style={styles.infoImage} />
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
