import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { primaryColor, textSize } from '../utils/utiles';
const fontSize = textSize();

const Divider = ({ value }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{value}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5
    },
    textStyle: {
        color: primaryColor,
        fontSize,
        fontFamily: 'narrow-bold'
    },
})
export default Divider;