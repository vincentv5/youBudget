import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BudgetCard from '../../components/BudgetCard';
import { useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import SubHeader from '../../components/SubHeader';
import CustomModal from '../../components/CustomModal';
import CustomButton from '../../components/commons/CustomButton';
import TextInputField from '../../components/commons/TextInputField';

import DatePicker from 'react-native-date-picker';
import { textSize, skyblue } from '../../utils/utiles';
const fontSize = textSize();
const uuid = require('react-native-uuid');

const BudgetListScreen = ({ navigation }) => {
    const Dispatch = useDispatch();
    const { data } = useSelector(({ budget }) => budget);
    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState(new Date());
    const [description, setDescription] = useState('');
    const [name, setName] = useState("");
    const [budget, setBudget] = useState("");
    const route = useRoute();


    const id = route.params.data.id;
    const item = data.filter((ele) => ele.id === id)[0]
    const items = item.items
        .map(item => <BudgetCard
            key={item.id}
            item={item.item}
            amount={item.budget_amount}
            onPress={() => navigation.navigate('ExpensesScreen', { id, item_id: item.id })}
        />);



    const handleSubmit = () => {
        if (!name || !description || !budget) {
            return;
        }

        const newBudget = {
            id: uuid.v1(),
            item: name,
            expense: [],//{amount:"", date:""id:uuid.v1()}]
            budget_amount: budget,
            budget_date: date,
        };
        Dispatch({ type: "SAVE_BUDGET", payload: { id, newBudget } });
        setBudget("");
        setDescription("");
        setDate(new Date);
        setName("");
        setVisible(false);
    }



    return (
        <>
            <SubHeader
                title={item.category}
                catIcon={item.icon}
                subtitle={"Budgets"}
                onPress={() => navigation.goBack(null)}
                onAdd={() => setVisible(true)}
            />
            <ScrollView>
                <View style={styles.viewStyle}>
                    {items}
                </View>
            </ScrollView>
            <CustomModal
                visible={visible}
                onReqClose={() => setVisible(false)}
            >
                <ScrollView keyboardShouldPersistTaps='always'>
                    <View style={styles.datePickerStyle}>
                        <TextInputField
                            placeholder={"Name"}
                            inputOverride={styles.inputOverride}
                            handleChange={(text) => setName(text)}
                            value={name}
                        />
                        <TextInputField
                            placeholder={"Description"}
                            inputOverride={styles.inputOverride}
                            handleChange={(text) => setDescription(text)}
                            value={description}
                        />
                        <TextInputField
                            placeholder={"Budget"}
                            numeric={"numeric"}
                            inputOverride={styles.inputOverride}
                            handleChange={(text) => setBudget(text)}
                            value={budget}
                        />

                        <Text style={styles.dateTextStyle}>Schedule Budget</Text>
                        <View style={styles.dateStyle}>
                            <DatePicker
                                date={date}
                                mode={"date"}
                                textColor={'#d9bca7'}
                                fadeToColor={skyblue}
                                onDateChange={(date) => setDate(date)}
                            />
                        </View>
                        <CustomButton
                            value={"Add"}
                            buttonOverride={styles.buttonOverride}
                            onPress={handleSubmit}
                        />
                    </View>
                </ScrollView>
            </CustomModal>

        </>
    )
}

const styles = StyleSheet.create({

    datePickerStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20
    },
    dateTextStyle: {
        fontSize: fontSize - 3,
        fontFamily: "narrow-bold",
        color: "#d9bca7",
        marginVertical: 5
    },
    buttonOverride: {
        width: "90%",
        marginTop: 10
    },
    inputOverride: {


    },
    viewStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default BudgetListScreen;