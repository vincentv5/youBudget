import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import BudgetCard from '../../components/BudgetCard';
import { useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import SubHeader from '../../components/SubHeader';
import CustomModal from '../../components/CustomModal';
import CustomButton from '../../components/commons/CustomButton';
import TextInputField from '../../components/commons/TextInputField';
import { textSize, skyblue, primaryColor } from '../../utils/utiles';
const fontSize = textSize();
const uuid = require('react-native-uuid');
const { height, width } = Dimensions.get('window');


const ExpensesScreen = ({ navigation }) => {
    const Dispatch = useDispatch();
    const { data } = useSelector(({ budget }) => budget);
    const [visible, setVisible] = useState(false);
    const [amount, setAmount] = useState("");
    const route = useRoute();


    const id = route.params.id;
    const item_id = route.params.item_id;
    const item = data.filter((ele) => ele.id === id)[0];
    const getSingleItem = item.items.filter(ele => ele.id === item_id)[0];



    const items = getSingleItem.expense;
    let expenses;
    if (items.length) {
        expenses = items.map(item => <BudgetCard
            key={item.id}
            item={getSingleItem.item}
            amount={item.amount}
        />);
    } else {
        expenses = (<View><Text>No Expenses</Text></View>);
    }


    const handleSubmit = () => {
        if (!amount) {
            return;
        }
        const newAmount = {
            id: uuid.v1(),
            amount,//{amount:"", date:""id:uuid.v1()}]
            date: new Date()
        };

        Dispatch({ type: "SAVE_EXPENSE", payload: { id, item_id, newAmount } });
        setAmount("");
        setVisible(false);

    }


    return (
        <>
            <SubHeader
                title={item.category}
                subtitle={"Expenses"}
                catIcon={item.icon}
                onPress={() => navigation.goBack(null)}
                onAdd={() => setVisible(true)}
            />
            <ScrollView>
                <View style={styles.viewStyle}>
                    {expenses}
                </View>
            </ScrollView>
            <CustomModal
                visible={visible}
                onReqClose={() => setVisible(false)}
                customStyle={styles.customStyle}
            >
                <View style={styles.datePickerStyle}>
                    <TextInputField
                        placeholder={"Amount spent"}
                        inputOverride={styles.inputOverride}
                        handleChange={(text) => setAmount(text)}
                        value={amount}
                        cover={styles.cover}
                    />

                    <CustomButton
                        value={"Add"}
                        buttonOverride={styles.buttonOverride}
                        onPress={handleSubmit}
                    />
                </View>
            </CustomModal>

        </>
    )
}

const styles = StyleSheet.create({
    cover: {
        borderRadius: 0,
        flex: 5,
        marginHorizontal: 0

    },
    customStyle: {
        marginTop: 0,
        backgroundColor: 'transparent',
        justifyContent: 'center'
    },
    datePickerStyle: {
        flexDirection: 'row',
        marginTop: 20,
        width: '80%',
        backgroundColor: 'gray',
        alignItems: "center",
        padding: 10,
        borderRadius: 3

    },
    dateTextStyle: {
        fontSize: fontSize - 3,
        fontFamily: "narrow-bold",
        color: "#d9bca7",
        marginVertical: 5,

    },
    buttonOverride: {
        borderRadius: 0,
        marginHorizontal: 0,
        overflow: 'hidden',
        flex: 2

    },
    inputOverride: {

    },
    viewStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ExpensesScreen;