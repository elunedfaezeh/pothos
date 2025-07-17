import { useState, useMemo } from "react";
import { Dimensions, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
const { width, height } = Dimensions.get('window');
import { RangeSlider, Slider } from '@react-native-assets/slider'
import { Animated } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";



function Item(props: any) {
    return (

        <View style={styles.item}>
            <Text style={{ fontSize: 10, fontFamily: "IRANYekan", textAlign: "center", }}> {props.item.Title}</Text>
        </View>
    );
}
const Favs = () => {



    const [selected, Setselected] = useState(0)

    const [sliderValue, setSliderValue] = useState(0);

    const [fullList, setFullList] = useState([
        { "id": 28, "Title": "کشاورزی", "Status": 1 },
        { "id": 28, "Title": "آپارتمان", "Status": 1 },
        { "id": 28, "Title": "خانه", "Status": 1 },
        { "id": 56, "Title": "زمین ", "Status": 1 },
        { "id": 56, "Title": "  ویلا", "Status": 1 },
        { "id": 89, "Title": "دفتر کار", "Status": 2 },
        { "id": 89, "Title": "غرفه", "Status": 2 },
        { "id": 89, "Title": "مغازه", "Status": 3 },
        { "id": 89, "Title": "دفتر کار", "Status": 2 },
        { "id": 89, "Title": "آپارتمان", "Status": 2 },



    ]);
    const list = [
        { id: 0, title: "  منطقه ۱", },
        { id: 1, title: "منطقه ۲ ", },
        { id: 2, title: "  منطقه ۳", },
        { id: 3, title: " منطقه ۴   ", },
        { id: 4, title: " منطقه ۵   ", },

    ]
    const bed = [
        { id: 0, title: "   ۱", },
        { id: 1, title: " ۲ ", },
        { id: 2, title: "   ۳", },
        { id: 3, title: "  ۴   ", },
        { id: 4, title: "  ۵   ", },

    ]

    const [status, setStatus] = useState('');

    const filteredList = useMemo(
        () => {
            if (status === 'NONE') return fullList;
            return fullList.filter(item => status === item.Status);
        },
        [status, fullList]
    );

    const onClick = (status) => () => {
        setStatus(status);
    }


    return (
        <View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", direction: "rtl", }}>
                    <TouchableOpacity
                        style={{
                            borderRadius: 30,
                            backgroundColor: selected === 0 ? "#e7f2ef" : "white",
                            marginLeft: 10,
                        }}
                        onPress={() => {
                            Setselected(0);

                        }}
                    >
                        <Text style={{
                            textAlign: "center",
                            fontSize: 12,
                            fontFamily: "IRANYekan",
                            width: 70,
                            height: 35,
                            paddingVertical: 5,
                            borderRadius: 10,
                            color: selected == 0 ? "#000" : "gray",

                        }}>
                            همه
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            borderRadius: 30,
                            backgroundColor: selected === 1 ? "#e7f2ef" : "white", // Change this to selected === 1
                            marginLeft: 10,
                        }}
                        onPress={() => {
                            onClick('0');
                            Setselected(1);

                        }}
                    >
                        <Text style={{
                            textAlign: "center",
                            fontSize: 12,
                            fontFamily: "IRANYekan",
                            color: selected == 1 ? "#000" : "gray",

                            width: 90,
                            height: 35,
                            paddingVertical: 5,
                            borderRadius: 10,
                        }}>
                            معروف ترین
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            borderRadius: 30,
                            backgroundColor: selected === 2 ? "#e7f2ef" : "white", // Change this to selected === 1
                            marginLeft: 10,
                        }} onPress={() => { onClick('2'); Setselected(2); }}
                    >
                        <Text style={{
                            textAlign: "center",
                            fontSize: 12, fontFamily: "IRANYekan",
                            color: selected == 2 ? "#000" : "gray",
                            width: 70,
                            height: 35,
                            paddingVertical: 5,
                            borderRadius: 10,
                        }} >  نوع</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        borderRadius: 30,
                        backgroundColor: selected === 3 ? "#e7f2ef" : "white", // Change this to selected === 1
                        margin: 10
                    }} onPress={() => { onClick('3'); Setselected(3); }}>
                        <Text style={{
                            textAlign: "center",
                            color: selected == 3 ? "#000" : "gray",
                            fontSize: 12, fontFamily: "IRANYekan",
                            width: 70,
                            height: 35,
                            paddingVertical: 5,
                            borderRadius: 10,
                        }} >  متراژ</Text>
                    </TouchableOpacity>

                </View>

                {/* <FlatList
                    contentContainerStyle={styles.list}
                    renderItem={Item}
                    keyExtractor={(item) => item.id.toString()}
                    data={filteredList}
                    numColumns={3}  // Set the number of columns here
                    columnWrapperStyle={{ flexWrap: "wrap", }} // Optional: style for the rows
                />
                <View style={{
                    height: 1,
                    backgroundColor: "#E4E0E1",
                    alignSelf: 'stretch',
                    margin: 10,
                }} /> */}

                <View style={{ flexDirection: "row", }}>
                    <Text style={{
                        fontFamily: "IRANYekan",
                    }}>رنج قیمت</Text>
                    <AntDesign name='tago' size={14} color="#000" onPress={() => props.navigation.navigate('Showall')}
                    />
                </View>
                <View style={{ flexDirection: "row", }}>
                    <TextInput style={styles.input}
                        placeholder="قیمت " />

                    <TextInput style={styles.input}
                        placeholder="قیمت " />
                </View>
                <View style={{ flex: 1, direction: "ltr", margin: 20, flexDirection: 'row', justifyContent: "center", alignItems: "center", }}>
                    <Slider
                        value={sliderValue}
                        minimumValue={1}
                        maximumValue={50}
                        step={1}
                        minimumTrackTintColor="#E4E0E1"
                        maximumTrackTintColor="#E4E0E1"
                        thumbTintColor="#00b064"
                        trackHeight={1}
                        thumbSize={19}
                        onValueChange={setSliderValue}
                        onSlidingStart={(value) => console.log('Sliding Started:', value)}
                        onSlidingComplete={(value) => console.log('Sliding Completed:', value)}
                    />
                </View>
                <View style={{
                    height: 1,
                    backgroundColor: "#E4E0E1",
                    alignSelf: 'stretch',
                    marginBottom: 15,
                }} />
                <View style={{ flexDirection: "row", }}>
                    <Text style={{
                        fontFamily: "IRANYekan",
                    }}>رنج منطقه</Text>

                </View>
                <View style={{ flexDirection: "row", }}>
                    <TextInput style={styles.input}
                        placeholder="قیمت " />

                    <TextInput style={styles.input}
                        placeholder="قیمت " />
                </View>
                <View style={{ flex: 1, direction: "ltr", margin: 20, flexDirection: 'row', justifyContent: "center", alignItems: "center", }}>
                    <Slider
                        value={sliderValue}
                        minimumValue={1}
                        maximumValue={50}
                        step={1}
                        minimumTrackTintColor="#E4E0E1"
                        maximumTrackTintColor="#E4E0E1"
                        thumbTintColor="#00b064"
                        trackHeight={1}
                        thumbSize={19}
                        onValueChange={setSliderValue}
                        onSlidingStart={(value) => console.log('Sliding Started:', value)}
                        onSlidingComplete={(value) => console.log('Sliding Completed:', value)}
                    />
                </View>
                <View style={{
                    height: 1,
                    backgroundColor: "#E4E0E1",
                    alignSelf: 'stretch',
                    marginBottom: 15,
                }} />

                <Text style={{
                    fontFamily: "IRANYekan",
                }}> منطقه </Text>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 10 }}

                >
                    {list.map((item, index) => (
                        <TouchableOpacity key={index} style={styles.backcategories}>
                            <Text style={styles.details}>{item.title}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <View style={{
                    height: 1,
                    backgroundColor: "#E4E0E1",
                    alignSelf: 'stretch',
                    marginBottom: 15,
                }} />

                <Text style={{
                    fontFamily: "IRANYekan",
                }}> تعداد اتاق خواب</Text>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 10 }}

                >
                    {bed.map((item, index) => (
                        <TouchableOpacity key={index} style={styles.backcategories}>
                            <Text style={styles.details}>{item.title}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <View style={{
                    height: 1,
                    backgroundColor: "#E4E0E1",
                    alignSelf: 'stretch',
                }} />


                <Text style={{
                    fontFamily: "IRANYekan", marginTop: 10,
                }}> تعداد حمام </Text>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 10, }}

                >
                    {bed.map((item, index) => (
                        <TouchableOpacity key={index} style={styles.backcategories}>
                            <Text style={styles.details}>{item.title}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

            </View>

        </View>

    )
}
export default Favs;
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',

        padding: 6,
        margin: 1,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },

        justifyContent: "center",
        alignItems: "center"


    },
    item: {
        width: 80,
        height: 39,
        margin: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#00b064",
    },

    input: {
        margin: 5,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        width: width / 2 - 40,
        textAlign: "right",
        borderColor: "#E4E0E1",
        fontFamily: "IRANYekan",

    },
    backcategories: {
        flexDirection: "row",
        elevation: 2,
        backgroundColor: "#EEEEEE",
        borderRadius: 28,
        width: 65,
        height: 35,

        margin: 7,
        justifyContent: "center",
    },


    details: {
        paddingTop: 10,
        fontSize: 10,
        fontFamily: "IRANYekan",
        color: "#000",
    }

});
