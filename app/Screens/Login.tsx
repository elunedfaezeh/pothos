import React, { useEffect, useState } from 'react';
import { StatusBar, Modal, StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView, TextInput, ActivityIndicator, SafeAreaView, Animated, Linking, Platform, Button, BackHandler } from 'react-native';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import Feather from 'react-native-vector-icons/Feather';
const { width, height } = Dimensions.get('window');
import { useDispatch, useSelector } from "react-redux";
import { login } from '../store/auth/authSlice';
export default (props: any) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: 4 });
    const [codeFieldProps, getCellOnLayout] = useClearByFocusCell({ value, setValue });
    const [randomCode, setRandomCode] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [number, setNumber] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    // const auth = useSelector((state: any) => state.auth);
    const dispatch = useDispatch();

    const onChangeNumber = (data: any) => {
        setNumber(data)
        setIsFocused(true)
    }
    const phoneNumber = '09216919291';
    const generateRandomCode = () => {
        var text = '';
        var possible = '123456789';
        for (var i = 0; i < 4; i++) {
            var sup = Math.floor(Math.random() * possible.length);
            text += i > 0 && sup == i ? '0' : possible.charAt(sup);
        }
        setRandomCode(text);
    }
    const onCallClick = () => {
        let number = '09216919291';
        if (Platform.OS === 'android') {
            number = `tel:${'09216919291'}`;
        } else {
            number = `telprompt:${'09216919291'}`;
        }
        Linking.openURL(number);
    }
    const [resend, setResend] = useState(false);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [startTimer, setStartTimer] = useState(false);

    const formatTime = (t: any) => t < 10 ? '0' + t : t;

    useEffect(() => {
        if (timeLeft == 0) {
            setResend(true)
        }
        if (startTimer) {
            const interval = setInterval(() => {
                const m = Math.floor(timeLeft / 30);
                const s = timeLeft - m * 30;
                setMin(m);
                setSec(s);
                if (m <= 0 && s <= 0) return () => clearInterval(interval);
                setTimeLeft((t) => t - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [timeLeft, startTimer, resend]);

    const onVerify = () => {
        setStartTimer(false);
        setTimeLeft(0);
        setValue('');
        setRandomCode('');
        console.log(number)
        dispatch(login(number))
        props.navigation.navigate('MyDrawer');
        setModalVisible(false);
    }

    const sendCode = () => {
        generateRandomCode()
        setModalVisible(true);
        setStartTimer(true);
        setTimeLeft(30);
        setResend(false);
    }

    const labelStyle = () => {
        return {
            top: !isFocused ? 40 : 0,
            fontSize: !isFocused ? 13 : 13,
            color: !isFocused ? '#bbb' : '#000',
            padding: isFocused ? 5 : 0,

        }
    }

    const modal = () =>
        <Modal
            animationType="slide"
            visible={modalVisible}
            onRequestClose={() => { setModalVisible(!modalVisible); }}>
            <View style={{
                bottom: 50,
                backgroundColor: "#00b064",
                borderBottomRightRadius: 60,
                borderBottomLeftRadius: 60,

            }}>
                <View>
                    <Text style={styles.welcomemodal}>به پتوس خوش اومدید!</Text>

                </View>


            </View>
            <View style={styles.modalContainer}>
                <Text style={styles.modalguide}>کد تایید را به شماره موبایل   <Text style={{ fontFamily: 'IranSans' }}>09216919291</Text> ارسال کردیم.</Text>
                <Text style={styles.modalguidebot}>شماره موبایل اشتباه است؟ <Text style={{ color: '#00b064', fontSize: 13 }} onPress={() => { setModalVisible(false); }}>ویرایش موبایل</Text></Text>
                <CodeField
                    ref={ref}
                    {...codeFieldProps}
                    value={value}
                    rootStyle={{ justifyContent: 'center' }}
                    onChangeText={setValue}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    cellCount={4}
                    renderCell={({ index, symbol, isFocused }) => (
                        <Text
                            key={index}
                            style={[styles.cell, isFocused && styles.focusCell]}
                            onLayout={getCellOnLayout(index)}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    )}
                />
                <TouchableOpacity activeOpacity={.9} disabled={randomCode == value && value.length == 4 ? false : true} style={[styles.button, { backgroundColor: randomCode == value ? '#A07856' : '#f1f1f1', }]}
                    onPress={onVerify}>
                    <Text style={[styles.textStyle, { color: randomCode == value && value.length == 4 ? '#fff' : '#777' }]}>تایید</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.9} disabled={timeLeft == 0 ? false : true}
                    onPress={sendCode}>
                    <Text style={styles.textresend}>کد به دستتون نرسیده؟ <Text style={[styles.button, { color: resend == true ? '#623817' : '#D4C7B4' }]}>ارسال مجدد کد</Text></Text>
                    <Text style={{ fontFamily: 'Iranyekan', fontSize: 12, textAlign: 'center', marginTop: 10 }}> ارسال مجدد کد تا {formatTime(min)}:{formatTime(sec)} </Text>

                </TouchableOpacity>

                <Text>{randomCode}</Text>
            </View>
        </Modal>

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <SafeAreaView >
                <StatusBar hidden={false} translucent={true} networkActivityIndicatorVisible={true}
                    backgroundColor={'#777'} barStyle="light-content" />
                <View style={{
                    marginTop: 20,
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginHorizontal: 15,
                    paddingVertical: 50,
                    // borderRadius:15,
                }}>
                    <Image
                        source={require('../../assets/login2.png')}
                        style={{ width: width * 0.8, height: 200, resizeMode: "center" }}
                    />
                </View>

                {modal()}
                <View>
                    
                </View>
                <Text style={styles.guide}>فرم ورود و ثبت نام پتوس</Text>
                <View>
                    <TextInput
                        keyboardType="numeric"
                        autoFocus
                        style={styles.input}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => number == '' ? setIsFocused(false) : null}
                        maxLength={11}
                        onChangeText={(x) => onChangeNumber(x)}
                        value={number}
                    />
                    <Text style={[styles.labelStyle, labelStyle()]}>شماره موبایل خود را وارد کنید</Text>
                </View>

                <TouchableOpacity activeOpacity={.9} disabled={number.length == 11 ? false : true} style={[styles.button, { backgroundColor: number.length == 11 ? '#00b064' : '#d8e2dc' }]}
                    onPress={sendCode} >
                    <Text style={[styles.textStyle, { color: number.length == 11 ? '#fff' : '#adb5bd' }]}>ورود</Text>
                </TouchableOpacity>
                <Text style={styles.terms}>با ثبت نام در همراه  <Text style={{ color: '#1976d2' }} onPress={() => Linking.openURL('https://google.com')}>شرایط و قوانین </Text>آنرا می پذیرم</Text>
            </SafeAreaView>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexGrow: 1,

    },
    cell: {
        marginTop: 50,
        marginHorizontal: 5,
        width: 50,
        height: 50,
        lineHeight: 50,
        fontSize: 24,
        borderWidth: 1,
        borderColor: '#623817',
        textAlign: 'center',
        borderRadius: 5,
    },
    focusCell: {
        borderColor: '#D4C7B4',

    },
    labelStyle: {
        position: 'absolute',
        right: 15,
        fontFamily: 'Iranyekan',
        paddingHorizontal: 18,
    },
    input: {
        height: 50,
        marginTop: 35,
        borderWidth: 0.8,
        paddingHorizontal: 18,
        borderColor: '#386641',
        borderRadius: 10,
        fontFamily: 'IranSans',
        marginHorizontal: 20,


    },
    modalContainer: {
        flex: 1,
        margin: 20,
        paddingHorizontal: 10,
        paddingVertical: 20,

    },
    button: {
        borderRadius: 12,
        padding: 15,
        marginTop: 25,
        marginHorizontal: 20,
    },
    footer: {
        position: 'absolute',
        top: height - 50,
        width: width,
        paddingHorizontal: 30,
    },
    callus: {
        borderRadius: 10,
        padding: 10,
        borderWidth: 0.5,
        paddingHorizontal: 10,
        borderColor: '#1976d2',
    },
    txtCallus: {
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'Iranyekan',
        color: '#1976d2'
    },
    textStyle: {
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'Iranyekan',
        color: '#fff'
    },
    welcome: {
        fontSize: 25,
        color: "#fff",
        textAlign: 'center',
        fontFamily: "Ghonche",
        marginTop: 140,
        padding: 20,
    },
    welcomemodal: {
        fontSize: 22,
        color: "#fff",
        textAlign: 'center',
        fontFamily: "Ghonche",
        marginTop: 110,
        padding: 40,
    },
    terms: {
        marginTop: 30,
        fontSize: 13,
        textAlign: 'center',
        fontFamily: 'Iranyekan',
        color: '#888'
    },
    guide: {
        fontSize: 17,
        fontWeight: "bold",
        textAlign: 'center',
        fontFamily: 'Iranyekan',
        marginHorizontal: 15,
        marginBottom: 35,
    },
    modalguide: {
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'Iranyekan',
        marginHorizontal: 10,
        paddingTop: 50,
    },
    modalguidebot: {
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'Iranyekan',
        marginHorizontal: 10,
    },
    textresend: {
        fontSize: 13,
        textAlign: 'center',
        fontFamily: 'Iranyekan',
        marginHorizontal: 10,
        paddingTop: 20,
    },


});



