import React from 'react';
const uuid = require('react-native-uuid');
import { MaterialCommunityIcons, Feather, FontAwesome5, Fontisto } from '@expo/vector-icons';
const icons = {
    home: <MaterialCommunityIcons name="home-city-outline" size={30} color="black" />,
    util: <Feather name="activity" size={30} color="black" />,
    tran: <MaterialCommunityIcons name="car-wash" size={30} color="black" />,
    food: <MaterialCommunityIcons name="food" size={30} color="black" />,
    med: <FontAwesome5 name="laptop-medical" size={30} color="black" />,
    ins: <Fontisto name="money-symbol" size={30} color="black" />
}
const INITIAL_STATE = {
    data: [
        {
            icon: icons.home,
            id: uuid.v1(),
            category: "HOUSING",
            description: "",
            items: [
                {
                    id: uuid.v1(),
                    item: "Rent",
                    expense: [],//{amount:"", date:""id:uuid.v1()}]
                    budget_amount: "300.00",
                    budget_date: "",
                    budget_range: "",

                },
                {
                    id: uuid.v1(),
                    item: "Rent",
                    expense: [],//{amount:"", date:""id:uuid.v1()}]
                    budget_amount: "300.00",
                    budget_date: "",
                    budget_range: "",

                },
                {
                    id: uuid.v1(),
                    item: "Rent",
                    expense: [],//{amount:"", date:""id:uuid.v1()}]
                    budget_amount: "300.00",
                    budget_date: "",
                    budget_range: "",

                }
            ]
        },

        {
            icon: icons.util,
            id: uuid.v1(),
            category: "UTILITIES",
            description: "",
            items: [
                {
                    id: uuid.v1(),
                    item: "Nepal bills",
                    expense: [],//{amount:"", date:""id:uuid.v1()}]
                    budget_amount: "300.00",
                    budget_date: "",
                    budget_range: "",

                }
            ]
        },

        {
            icon: icons.tran,
            id: uuid.v1(),
            category: "TRANSPORT",
            description: "",
            items: [
                {
                    id: uuid.v1(),
                    item: "Car maintenance",
                    expense: [],//{amount:"", date:""id:uuid.v1()}]
                    budget_amount: "300.00",
                    budget_date: "",
                    budget_range: "",

                }
            ]
        },
        {
            icon: icons.food,
            id: uuid.v1(),
            category: "FOOD",
            description: "",
            items: [
                {
                    id: uuid.v1(),
                    item: "Restaurant meals",
                    expense: [],//{amount:"", date:""id:uuid.v1()}]
                    budget_amount: "300.00",
                    budget_date: "",
                    budget_range: "",

                }
            ]
        },

        {
            icon: icons.ins,
            id: uuid.v1(),
            category: "INSURANCE",
            description: "",
            items: [
                {
                    id: uuid.v1(),
                    item: "Health insurance",
                    expense: [],//{amount:"", date:""id:uuid.v1()}]
                    budget_amount: "300.00",
                    budget_date: "",
                    budget_range: "",

                }
            ]
        },

        {
            icon: icons.med,
            id: uuid.v1(),
            category: "MEDICAL",
            description: "Prescriptions",
            items: [
                {
                    id: uuid.v1(),
                    item: "Prescriptions",
                    expense: [],//{amount:"", date:""id:uuid.v1()}]
                    budget_amount: "300.00",
                    budget_date: "",
                    budget_range: "",

                }
            ]
        },

    ]
};




export default function reducers(state = INITIAL_STATE, action) {
    switch (action.type) {

        case "SAVE_BUDGET":
            const newData = [...state.data];
            const len = newData.length;
            for (let i = 0; i < len; i++) {
                if (newData[i].id === action.payload.id) {
                    newData[i].items.push(action.payload.newBudget);
                    break;
                }
            }
            return {
                ...state,
                data: newData
            };


        case "SAVE_EXPENSE":
            const dataArr = [...state.data];
            const lent = dataArr.length;
            for (let i = 0; i < lent; i++) {
                if (dataArr[i].id === action.payload.id) {
                    for (let j = 0; j < dataArr[i].items.length; j++) {
                        if (dataArr[i].items[j].id === action.payload.item_id) {
                            dataArr[i].items[j].expense.push(action.payload.newAmount);
                            break;
                        }
                    }

                }
            }
            return {
                ...state,
                data: dataArr
            }



        default:
            return state;
    }
}