import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import axios from 'axios';

const FaqScreen = () => {
    const baseUrl = 'https://api.apprad.ir/user/getFaqs';

    const [isShow, setIsShow] = useState({ show: false, id: -1 });
    const [data, setData] = useState();


    // const getFaqs = async () => {
    //     axios.get(baseUrl).then((response) => {
    //         const json = response.json();
    //         setData(response.data);
    //         console.log(response.data);
    //     });
    // }



    const getFaqs = async () => {
        try {
            const response = await axios.get(baseUrl);
            setData(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getFaqs();
    }, []);

    const onPress = (i: number) => {
        setIsShow((prev) => ({ show: prev.id !== i ? true : !prev.show, id: i }));
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>سوالات متداول</Text>
            </View>
            <FlatList
                data={data}
                style={styles.list}
                renderItem={({ item }) => (
                    <View>
                        <TouchableOpacity
                            style={styles.head}
                            activeOpacity={0.9}
                            onPress={() => onPress(item._id)}
                        >
                            <AntDesign
                                name={isShow.id === item._id && isShow.show ? "up" : "down"}
                                color="#00b064"
                                size={20}
                                style={styles.icon}
                            />
                            <Text style={styles.textHead}>{item.question}</Text>
                        </TouchableOpacity>
                        {isShow.id === item._id && isShow.show && (
                            <View style={styles.item}>
                                <Text style={styles.textItem}>{item.reply}</Text>
                            </View>
                        )}
                    </View>
                )}
                keyExtractor={(item) => item._id.toString()}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        margin: 30,
    },
    headerContainer: {
        paddingVertical: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fff',
        elevation: 3,
        borderRadius: 15,
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 18,
        fontFamily: "IRANYekan",
        color: '#333',
    },
    list: {
        marginTop: 20,
        borderRadius: 10,
        overflow: 'hidden',
    },
    head: {
        margin: 5,
        backgroundColor: '#fff',
        elevation: 2,
        borderRightWidth: 1,
        borderColor: '#00b064',
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        borderRadius: 15,

    },
    textHead: {
        color: '#222',
        fontSize: 16,
        fontFamily: "IRANYekan",
        marginLeft: 10,
        flex: 1,
        textAlign: "right",


    },
    icon: {
        marginRight: 10,
    },
    item: {
        marginBottom: 10,
        borderRadius: 15,
        backgroundColor: '#fff',
        padding: 15,
        borderColor: '#ccc',
    },
    textItem: {
        borderRadius: 10,

        textAlign: "right",
        color: '#222',
        fontSize: 14,
        fontFamily: "IRANYekan",
    },
});

export default FaqScreen;
