import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { textSize } from '../utils/utiles';
import * as Progress from 'react-native-progress';
const fontSize = textSize();
const BudgetCard = ({ item, amount, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.viewStyle}>
                <View style={styles.subCon}>
                    <Text style={styles.textStyle}>{item}</Text>
                    <Text style={styles.amountStyle}>{amount}</Text>
                </View>
                <Progress.Bar progress={0.3} width={200} />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    subCon: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    viewStyle: {
        backgroundColor: "#fff",
        width: '90%',
        flexDirection: 'column',
        paddingHorizontal: 20,
        borderRadius: 3,
        paddingVertical: 20,
        shadowColor: 'gray',
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 3,
        marginVertical: 0.5
    },
    textStyle: {
        fontSize: fontSize - 4,
        fontFamily: "narrow-bold",
        color: "#d9bca7"
    },
    amountStyle: {
        fontSize: fontSize - 4,
        fontFamily: "sum-b",
        fontWeight: 'bold'
    }
})

export default BudgetCard;