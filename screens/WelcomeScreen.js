import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import MyButton from '../components/MyButton';
import PageLink from '../components/PageLink'
import WelcomeScreenBubble from '../components/WelcomeScreenBubble'
import BubbleStyles from '../utilities/BubbleStyles'
import { text } from '../utilities/Text'
import IncomeInequalityImage from '../svg/IncomeInequalityImage'

const styles = StyleSheet.create({
    container: {
        // Note: The 'flex-container' needs a flex: 1 property
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        paddingBottom: 30,
    },
})

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <PageLink
                text={"Skip Intro"}
                // Note: Must pass down {navigation} as a prop to the <TouchableOpacity> component to change screens
                navigation={navigation}
            />
            <WelcomeScreenBubble
                text={text.text1}
                background={BubbleStyles.background1}
                textStyle={BubbleStyles.text} />
            <WelcomeScreenBubble
                text={text.text2}
                background={BubbleStyles.background2}
                textStyle={BubbleStyles.text} />
            <WelcomeScreenBubble
                text={text.text3}
                background={BubbleStyles.background1}
                textStyle={BubbleStyles.text} />
            <WelcomeScreenBubble
                text={text.text4}
                background={BubbleStyles.background2}
                textStyle={BubbleStyles.text} />
            <IncomeInequalityImage />
            <MyButton
                text={"Continue"}
                navigation={navigation}
                screen={"InfoScreen"} />
        </View>
    )
}

WelcomeScreen.defaultProps = {

}

export default WelcomeScreen;
