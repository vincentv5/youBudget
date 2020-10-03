import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Card from '../../components/Card';
import Header from '../../components/Header';
import { useSelector } from 'react-redux';
import { textSize } from '../../utils/utiles';
const fontSize = textSize();
const Dashboard = ({ navigation }) => {
    const { data } = useSelector(({ budget }) => budget);
    return (
        <>
            <Header onPress={() => navigation.goBack(null)} />
            <View>
                <Text style={styles.titleStyle}>Budget categories</Text>
            </View>
            <ScrollView>
                <View style={styles.viewStyle}>
                    <View style={styles.grid1}>
                        <Card
                            title={data[0].category}
                            icon={data[0].icon}
                            onPress={() => navigation.navigate("BudgetListScreen", {
                                data: {
                                    id: data[0].id
                                }
                            })}
                        />
                        <Card
                            title={data[1].category}
                            icon={data[1].icon}
                            onPress={() => navigation.navigate("BudgetListScreen", {
                                data: {
                                    id: data[1].id
                                }
                            })}
                        />
                    </View>

                    <View style={styles.grid1}>
                        <Card
                            title={data[2].category}
                            icon={data[2].icon}
                            onPress={() => navigation.navigate("BudgetListScreen", {
                                data: {
                                    id: data[2].id
                                }
                            })}
                        />
                        <Card
                            title={data[3].category}
                            icon={data[3].icon}
                            onPress={() => navigation.navigate("BudgetListScreen", {
                                data: {
                                    id: data[3].id
                                }
                            })}
                        />
                    </View>
                    <View style={styles.grid1}>
                        <Card
                            title={data[4].category}
                            onPress={() => navigation.navigate("BudgetListScreen", {
                                data: {
                                    id: data[4].id
                                }
                            })}
                            icon={data[4].icon}
                        />
                        <Card
                            title={data[5].category}
                            icon={data[5].icon}
                            onPress={() => navigation.navigate("BudgetListScreen", {
                                data: {
                                    id: data[5].id
                                }
                            })}
                        />
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'column',

    },
    grid1: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 5
    },
    titleStyle: {
        fontSize,
        fontFamily: "suma-b",
        marginLeft: 50
    }
})

export default Dashboard;