import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { textSize } from '../utils/utiles';
const fontSize = textSize();
const icon = {
    left: <AntDesign name="arrowleft" size={24} color="black" />,
    add: <Ionicons name="ios-add-circle" size={50} color="#d9bca7" />
}

const SubHeader = ({ onPress, title, catIcon, onAdd, subtitle }) => {
    return (
        <View style={styles.headerStyle}>
            <View style={styles.navStyle}>
                <TouchableWithoutFeedback onPress={onPress}>
                    <Text style={styles.text}>
                        {icon.left}
                    </Text>
                </TouchableWithoutFeedback>
                <View style={styles.catIconContainer}>
                    <Text style={styles.title}>{catIcon}</Text>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View />
            </View>
            <View style={styles.tabStyle}>
                <Text style={styles.tabText}>{subtitle}</Text>
                <TouchableWithoutFeedback onPress={onAdd}>
                    <Text>{icon.add}</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    catIconContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    title: {
        color: '#d9bca7',
        fontFamily: 'narrow-bold',
        fontSize: fontSize - 5,
    },
    navStyle: {
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    headerStyle: {
        paddingVertical: 20,
    },

    tabStyle: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 30,
        alignItems: 'center'
    },
    tabText: {
        fontFamily: 'narrow-bold',
        fontSize,
        color: "#d9bca7"
    }
})

export default SubHeader;