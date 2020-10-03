import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextInputField from '../../components/commons/TextInputField';
import CustomButton from '../../components/commons/CustomButton';
import Divider from '../../components/Divider';
import { textSize } from '../../utils/utiles';
const fontSize = textSize();
import { facebook } from '../../utils/utiles';
const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.titleContainer}>
                <Text style={styles.text1}>Welcome</Text>
                <Text style={styles.text2}>Login to start</Text>
            </View>
            <TextInputField
                placeholder={"Email"}
            />
            <TextInputField
                placeholder={"Password"}
                label2={"Forgot?"}
                secureTextEntry
            />
            <CustomButton
                value={"Login"}
                onPress={() => navigation.navigate("Dashboard")}
            />
            <Divider value={"OR"} />
            <CustomButton
                snB icon={facebook}
                value={"Login with Facebook"}
                btnText
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "#f8f8f8",
        flexDirection: "column",
    },

    titleContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    text1: {
        fontFamily: 'narrow-bold',
        fontSize: fontSize + 5
    },
    text2: {
        fontFamily: 'narrow-bold',
        fontSize
    }

})


export default LoginScreen;