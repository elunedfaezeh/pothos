import { Alert, Button, Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import React, { useMemo, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import ImagePicker from 'react-native-image-crop-picker';
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { MultipleSelectList } from 'react-native-dropdown-select-list'
import Ionicons from "react-native-vector-icons/Ionicons";
const { width, height } = Dimensions.get('window');



const Advertise = () => {
    const renderItem = item => {
        return (
            <View style={styles.item}>
                <Ionicons style={styles.icon} color="#00b064" name="cog-outline" size={20} />
                <Text style={styles.selectedTextStyle}>{item.label}</Text>
            </View>
        );
    };
    const [selectedSubCategory, setSelectedSubCategory] = useState("1");
    const [color, setColor] = useState(null);
    const [selectedButton, setSelectedButton] = useState(1);

    const buttonData = [
        { label: 'املاک', colorIndex: 1, subCategories: ['آپارتمان', 'زمین', 'خانه', 'ویلا', 'دفتر'] },
        { label: 'تجاری', colorIndex: 2, subCategories: ['غرفه', 'مغازه', 'کشاورزی'] },
        { label: 'مسکونی', colorIndex: 3, subCategories: ['آپارتمان', 'ویلا', 'دفتر'] },

    ];

    const handleButtonClick = (button: { label?: string; colorIndex: any; subCategories?: string[]; }) => {
        setSelectedButton(button.colorIndex);
        setColor(button.colorIndex);
    };

    const [listCondition, setListCondition] = useState(null)
    const condition = [
        { label: 'وام ', value: '1' },
        { label: ' سند', value: '2' },

    ];

    const [listExchange, setListExchange] = useState(null)
    const exchange = [
        { label: ' ملک', value: '1' },
        { label: ' سند', value: '2' },
        { label: ' طلا', value: '3' },

    ];
    const city = [
        { label: 'تهران', value: '1' },
        { label: 'آذربایجان شرقی', value: '2' },
        { label: 'قزوین', value: '3' },
        { label: 'آبیک', value: '4' },
        { label: 'بانه', value: '5' },
        { label: 'قائنات', value: '6' },
        { label: 'آستارا', value: '7' },
        { label: 'شازند', value: '8' },
    ];
    const state = [
        { label: 'تهران', value: '1' },
        { label: 'آذربایجان شرقی', value: '2' },
        { label: 'قزوین', value: '3' },
        { label: 'آبیک', value: '4' },
        { label: 'بانه', value: '5' },
        { label: 'قائنات', value: '6' },
        { label: 'آستارا', value: '7' },
        { label: 'شازند', value: '8' },
    ];
    const bed = [
        { id: 0, title: "   ۱", },
        { id: 1, title: " ۲ ", },
        { id: 2, title: "   ۳", },
        { id: 3, title: "  ۴   ", },
        { id: 4, title: "  ۵   ", },

    ]


    const [images, setImages] = useState([]);
    const [selected, Setselected] = useState(0);


    const feature = [
        { label: 'بالکن', value: '1' },
        { label: 'انباری', value: '2' },
        { label: 'پارکینگ', value: '3' },
        { label: 'اسانسور', value: '4' },

    ];
    const [listFeature, setListFeature] = useState([]);



    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            multiple: true
        }).then(selectedImages => {
            console.log(selectedImages);
            setImages(prevImages => [...prevImages, ...selectedImages]);
        }).catch(error => {
            console.error("Error opening gallery: ", error);
        });
    }
    const [valueState, setValueState] = useState(null)

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const removeImage = (index) => {
        setImages(prevImages => prevImages.filter((_, i) => i !== index));
    }




    return (
        <ScrollView contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 10, backgroundColor: "#fff", flex: 1, }}>
            <View style={{
                marginTop: 50,
                marginHorizontal: 10,
                backgroundColor: "#e7f2ef",
                paddingHorizontal: 10,
                shadowColor: 'black',
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                borderRadius: 20,
                flexDirection: "row",
                justifyContent: "space-between",
            }}>
                <View>
                    <Text style={{
                        paddingHorizontal: 25,
                        textAlign: "left",
                        color: "#347928",
                        fontSize: width * 0.03,
                        marginTop: 20,
                        fontFamily: 'IRANYekan',
                        fontWeight: "bold",
                    }}>ثبت آگهی با چندین قدم</Text>
                    <Text style={{
                        paddingHorizontal: 5,
                        textAlign: "center",
                        color: "gray", fontFamily: 'IRANYekan',
                        fontWeight: "bold", fontSize: 12,
                    }}>هزاران خانه و مسکن را با ما پیدا کنید</Text>
                </View>
                <Image style={{
                    width: 160,
                    height: 150,
                    marginLeft: -19,
                    resizeMode: "contain"
                }}
                    source={require('../../assets/add.png')} />
            </View>

            <View style={{ direction: "rtl", flexDirection: "row", paddingVertical: 10 }}>
                <View style={{ backgroundColor: "#EEEEEE", paddingVertical: 4, borderRadius: 20 }}>
                    <AntDesign name="checkcircleo" color='gray' size={18} style={{ paddingHorizontal: 5 }} />
                </View>
                <Text style={{ fontFamily: "IRANYekan", paddingLeft: 7, fontSize: 13, }}>نوع اگهی</Text>
            </View>

            <View style={{
                marginHorizontal: 10,
                width: "28%",
                alignSelf: "flex-end",
                marginTop: 10,
                marginBottom: 20,
                height: 35,
                backgroundColor: "white",
                borderWidth: 1,
                borderColor: "#00b064",
                borderRadius: 30,
                flexDirection: "row",
                alignItems: "flex-end",
            }}>
                <TouchableOpacity style={{
                    width: "48%",
                    height: 33,
                    backgroundColor: selected == 0 ? "#00b064" : "white",
                    borderRadius: 30,
                    justifyContent: "center",
                    alignItems: "center",
                }} onPress={() => { Setselected(0); }}>
                    <Text style={{
                        color: selected == 0 ? "#fff" : "#000",
                        fontSize: 13, fontWeight: "400", fontFamily: "IRANYekan",
                    }}>فروش</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: "52%",
                    height: 33,
                    backgroundColor: selected == 1 ? "#00b064" : "white",
                    borderRadius: 30,
                    justifyContent: "center",
                    alignItems: "center",
                }} onPress={() => { Setselected(1); }}>
                    <Text style={{ color: selected == 1 ? "#fff" : "#000", fontSize: 13, fontWeight: "400", fontFamily: "IRANYekan" }}>اجاره</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                height: 1,
                backgroundColor: "#E4E0E1",
                alignSelf: 'stretch',
                marginVertical: 5,
                marginHorizontal: 20,
            }} />
            <View style={{ direction: "rtl", flexDirection: "row", paddingVertical: 10 }}>
                <View style={{ backgroundColor: "#EEEEEE", paddingVertical: 4, borderRadius: 20 }}>
                    <FontAwesome name="building-o" color='gray' size={18} style={{ paddingHorizontal: 8, paddingVertical: 2, }} />
                </View>
                <Text style={{ fontFamily: "IRANYekan", fontSize: 13, paddingLeft: 7, }}>نوع ملک را انتخاب کنید </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", direction: "rtl" }}>
                {buttonData.map((button, index) => (
                    <TouchableOpacity
                        key={index}
                        style={{
                            borderWidth: .5,
                            borderColor: color === button.colorIndex ? "#00b064" : "white",
                            borderRadius: 30,
                            backgroundColor: color === button.colorIndex ? "#e7f2ef" : "white",
                            marginLeft: 10,
                        }}
                        onPress={() => handleButtonClick(button)}
                    >
                        <Text style={{
                            textAlign: "center",
                            fontSize: 12,
                            fontFamily: "IRANYekan",
                            width: 90,
                            height: 35,
                            paddingVertical: 5,
                            borderRadius: 10,
                            color: color === button.colorIndex ? "#000" : "gray",
                        }}>
                            {button.label}
                        </Text>

                    </TouchableOpacity>
                ))}
            </View>
            <View style={{
                marginTop: 10,
                height: 1,
                backgroundColor: "#E4E0E1",
                alignSelf: 'stretch',
                marginHorizontal: 50,
            }} />
            {selectedButton && buttonData.map(button => {
                if (button.colorIndex === selectedButton) {
                    const subCategories = button.subCategories;
                    const rows = [];
                    for (let i = 0; i < subCategories.length; i += 3) {
                        rows.push(subCategories.slice(i, i + 3));
                    }

                    return (
                        <View key={button.colorIndex} style={{
                            marginTop: 20,
                            direction: "rtl",
                            justifyContent: "center",
                        }}>
                            {rows.map((row, rowIndex) => (
                                <View key={rowIndex} style={{ flexDirection: "row", justifyContent: "center" }}>
                                    {row.map((sub, subIndex) => (
                                        <TouchableOpacity
                                            key={subIndex}
                                            style={{ padding: 5 }}
                                            onPress={() => setSelectedSubCategory(sub)}
                                        >
                                            <View style={{
                                                borderColor: selectedSubCategory === sub ? "#00b064" : "white",
                                                borderWidth: .5,
                                                backgroundColor: "#e7f2ef",
                                                paddingVertical: 7,
                                                paddingHorizontal: 20,
                                                marginHorizontal: 5,
                                                borderRadius: 30,
                                            }}>
                                                <Text style={{
                                                    fontSize: 12,
                                                    color: "#000",
                                                    fontFamily: "IRANYekan",

                                                }}>
                                                    {sub}
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            ))}
                        </View>
                    );
                }
                return null;
            })
            }


            <View style={{
                marginTop: 10,
                height: 1,
                backgroundColor: "#E4E0E1",
                alignSelf: 'stretch',
                marginHorizontal: 20,
            }} />
            <View style={{ direction: "rtl", flexDirection: "row", paddingVertical: 10 }}>
                <View style={{ backgroundColor: "#EEEEEE", paddingVertical: 4, borderRadius: 20 }}>
                    <Ionicons name="location-outline" color='gray' size={18} style={{ paddingHorizontal: 8, paddingVertical: 2, }} />
                </View>
                <Text style={{ fontFamily: "IRANYekan", fontSize: 13, paddingLeft: 7, }}>شهر</Text>
            </View>
            <View style={styles.container}>
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: '#00b064' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={[styles.inputSearchStyle, { textAlign: 'right' }]}
                    iconStyle={styles.iconStyle}
                    data={city}
                    search
                    maxHeight={300}

                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'انتخاب کنید ' : '...'}
                    searchPlaceholder="جستجو"
                    value={value}

                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                    }}
                    renderLeftIcon={() => (
                        <Ionicons
                            style={styles.icon}
                            color={isFocus ? '#000 ' : '#00b064'}
                            name="location-outline"
                            size={20}
                        />
                    )}
                    renderItem={(item) => (
                        <View style={{ direction: "rtl", alignItems: 'flex-start', padding: 10 }}>
                            <Text style={{ fontFamily: "IRANYekan", }}>
                                {item.label}
                            </Text>
                        </View>
                    )}

                />

            </View>
            <View style={{
                marginTop: 10,
                height: 1,
                backgroundColor: "#E4E0E1",
                alignSelf: 'stretch',
                marginHorizontal: 20,
            }} />
            <View style={{ direction: "rtl", flexDirection: "row", paddingVertical: 10 }}>
                <View style={{ backgroundColor: "#EEEEEE", paddingVertical: 4, borderRadius: 20 }}>
                    <Ionicons name="location-outline" color='gray' size={18} style={{ paddingHorizontal: 8, paddingVertical: 2, }} />
                </View>
                <Text style={{ fontFamily: "IRANYekan", fontSize: 13, paddingLeft: 7, }}>استان</Text>
            </View>
            <View style={styles.container}>
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: '#00b064' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={[styles.inputSearchStyle, { textAlign: 'right' }]}
                    iconStyle={styles.iconStyle}
                    data={state} // Ensure state is an array of objects with label and value
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'انتخاب کنید ' : '...'}
                    searchPlaceholder="جستجو"
                    value={valueState}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValueState(item.value); // Assuming item has a 'value' property
                        setIsFocus(false);
                    }}
                    renderLeftIcon={() => (
                        <Ionicons
                            style={styles.icon}
                            color={isFocus ? '#000' : '#00b064'}
                            name="location-outline"
                            size={20}
                        />
                    )}
                    renderItem={(item) => (
                        <View style={{ direction: "rtl", alignItems: 'flex-start', padding: 10 }}>
                            <Text style={{ fontFamily: "IRANYekan" }}>
                                {item.label} {/* Display the label of the item */}
                            </Text>
                        </View>
                    )}
                />

            </View>
            <View style={{
                marginTop: 10,
                height: 1,
                backgroundColor: "#E4E0E1",
                alignSelf: 'stretch',
                marginHorizontal: 20,
            }} />
            <View style={{ direction: "rtl", flexDirection: "row", paddingVertical: 10 }}>
                <View style={{ backgroundColor: "#EEEEEE", paddingVertical: 4, borderRadius: 20 }}>
                    <FontAwesome name="map-o" color='gray' size={18} style={{ paddingHorizontal: 8, paddingVertical: 2, }} />
                </View>
                <Text style={{ fontFamily: "IRANYekan", fontSize: 13, paddingLeft: 7, }}> انتخاب لوکیشن</Text>
                <FontAwesome name="angle-left" color='gray' size={22} style={{ paddingHorizontal: 8, paddingVertical: 2, flex: 1, }} />

            </View>
            <View style={{
                marginTop: 10,
                height: 1,
                backgroundColor: "#E4E0E1",
                alignSelf: 'stretch',
                marginHorizontal: 20,
            }} />


            {/* <View style={{ direction: "rtl", flexDirection: "row", paddingVertical: 10 }}>
                <View style={{ backgroundColor: "#EEEEEE", paddingVertical: 4, borderRadius: 20 }}>
                    <Ionicons name="cog-outline" color='gray' size={18} style={{ paddingHorizontal: 8, paddingVertical: 2, }} />
                </View>
                <Text style={{ fontFamily: "IRANYekan", fontSize: 13, paddingLeft: 7, }}>ویژگی ها</Text>
            </View>


            <View style={{
                padding: 16
            }}>
                <MultiSelect
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={feature}
                    labelField="label"
                    valueField="value"
                    placeholder="ویژگی مورد نظر خود را انتخاب کنید"
                    value={listFeature}
                    search
                    searchPlaceholder="جستجو"
                    onChange={item => {
                        setListFeature(item);
                    }}
                    renderLeftIcon={() => (
                        <Ionicons
                            style={styles.icon}
                            color="#00b064"
                            name="cog-outline"
                            size={20}
                        />
                    )}
                    renderItem={renderItem}
                    renderSelectedItem={(item, unSelect) => (
                        <TouchableOpacity style={{
                            flexDirection: "row",
                            justifyContent: "center", alignItems: "center",

                        }} onPress={() => unSelect && unSelect(item)}>
                            <View style={styles.selectedStyle}>
                                <AntDesign color="#00b064" name="delete" size={17} />
                                <Text style={styles.textSelectedStyle}>{item.label}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />


            </View>

            <View style={{
                marginTop: 10,
                height: 1,
                backgroundColor: "#E4E0E1",
                alignSelf: 'stretch',
                marginHorizontal: 20,
            }} />

            <View style={{ direction: "rtl", flexDirection: "row", paddingVertical: 10 }}>
                <View style={{ backgroundColor: "#EEEEEE", paddingVertical: 4, borderRadius: 20 }}>
                    <Ionicons name="pricetag-outline" color='gray' size={18} style={{ paddingHorizontal: 8, paddingVertical: 2, }} />
                </View>
                <Text style={{ fontFamily: "IRANYekan", fontSize: 13, paddingLeft: 7, }}> قیمت مد نظر خود را بنویسید</Text>
            </View>
            <View style={{
            }}>
                <TextInput style={{
                    textAlign: "right",
                    marginHorizontal: 20,
                    fontFamily: "IRANYekan",
                    height: 50,
                    backgroundColor: 'white',
                    borderRadius: 12,
                    padding: 12,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 1.41,

                    elevation: 2,
                }}
                    placeholder="شماره موبایل خود را وارد کنید " />
            </View>

            <View style={{
                marginTop: 10,
                height: 1,
                backgroundColor: "#E4E0E1",
                alignSelf: 'stretch',
                marginHorizontal: 20,
            }} />

            <View style={{ direction: "rtl", flexDirection: "row", paddingVertical: 10 }}>
                <View style={{ backgroundColor: "#EEEEEE", paddingVertical: 4, borderRadius: 20 }}>
                    <Ionicons name="cog-outline" color='gray' size={18} style={{ paddingHorizontal: 8, paddingVertical: 2, }} />
                </View>
                <Text style={{ fontFamily: "IRANYekan", fontSize: 13, paddingLeft: 7, }}> شرایط</Text>
            </View>


            <View style={{
                padding: 16
            }}>
                <MultiSelect
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={condition}
                    labelField="label"
                    valueField="value"
                    placeholder="شرایط مورد نظر خود را انتخاب کنید"
                    value={listCondition}
                    search
                    searchPlaceholder="جستجو"
                    onChange={item => {
                        setListCondition(item);
                    }}
                    renderLeftIcon={() => (
                        <Ionicons
                            style={styles.icon}
                            color="#00b064"
                            name="cog-outline"
                            size={20}
                        />
                    )}
                    renderItem={renderItem}
                    renderSelectedItem={(item, unSelect) => (
                        <TouchableOpacity style={{
                            flexDirection: "row",
                            justifyContent: "center", alignItems: "center",

                        }} onPress={() => unSelect && unSelect(item)}>
                            <View style={styles.selectedStyle}>
                                <AntDesign color="#00b064" name="delete" size={17} />
                                <Text style={styles.textSelectedStyle}>{item.label}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />


            </View>
            <View style={{
                marginTop: 10,
                height: 1,
                backgroundColor: "#E4E0E1",
                alignSelf: 'stretch',
                marginHorizontal: 20,
            }} />

            <View style={{ direction: "rtl", flexDirection: "row", paddingVertical: 10 }}>
                <View style={{ backgroundColor: "#EEEEEE", paddingVertical: 4, borderRadius: 20 }}>
                    <Feather name="inbox" color='gray' size={18} style={{ paddingHorizontal: 8, paddingVertical: 2, }} />
                </View>
                <Text style={{ fontFamily: "IRANYekan", fontSize: 13, paddingLeft: 7, }}> معاوضه</Text>
            </View>


            <View style={{
                padding: 16
            }}>
                <MultiSelect
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={exchange}
                    labelField="label"
                    valueField="value"
                    placeholder="معاوضه "
                    value={listExchange}
                    search
                    searchPlaceholder="جستجو"
                    onChange={item => {
                        setListExchange(item);
                    }}
                    renderLeftIcon={() => (
                        <Ionicons
                            style={styles.icon}
                            color="#00b064"
                            name="cog-outline"
                            size={20}
                        />
                    )}
                    renderItem={renderItem}
                    renderSelectedItem={(item, unSelect) => (
                        <TouchableOpacity style={{
                            flexDirection: "row",
                            justifyContent: "center", alignItems: "center",

                        }} onPress={() => unSelect && unSelect(item)}>
                            <View style={styles.selectedStyle}>
                                <Feather color="#00b064" name="inbox" size={17} />
                                <Text style={styles.textSelectedStyle}>{item.label}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />


            </View> */}
            {/* <View style={{
                marginTop: 10,
                height: 1,
                backgroundColor: "#E4E0E1",
                alignSelf: 'stretch',
                marginHorizontal: 20,
            }} />

            <View style={{ direction: "rtl", flexDirection: "row", paddingVertical: 10 }}>
                <View style={{ backgroundColor: "#EEEEEE", paddingVertical: 4, borderRadius: 20 }}>
                    <Ionicons name="cog-outline" color='gray' size={18} style={{ paddingHorizontal: 8, paddingVertical: 2, }} />
                </View>
                <Text style={{ fontFamily: "IRANYekan", fontSize: 13, paddingLeft: 7, }}>ویژگی ها</Text>
            </View>


            <View style={{
                padding: 16
            }}>
                <MultiSelect
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={feature}
                    labelField="label"
                    valueField="value"
                    placeholder="ویژگی مورد نظر خود را انتخاب کنید"
                    value={exchange}
                    search
                    searchPlaceholder="جستجو"
                    onChange={item => {
                        setListFeature(item);
                    }}
                    renderLeftIcon={() => (
                        <Ionicons
                            style={styles.icon}
                            color="#00b064"
                            name="cog-outline"
                            size={20}
                        />
                    )}
                    renderItem={renderItem}
                    renderSelectedItem={(item, unSelect) => (
                        <TouchableOpacity style={{
                            flexDirection: "row",
                            justifyContent: "center", alignItems: "center",

                        }} onPress={() => unSelect && unSelect(item)}>
                            <View style={styles.selectedStyle}>
                                <AntDesign color="#00b064" name="delete" size={17} />
                                <Text style={styles.textSelectedStyle}>{item.label}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />


            </View>
 */}

            {/* {selected == 0 ? (<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text></Text>
            </View>) : (<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text></Text>
            </View>)} */}

            {/* <View style={styles.imageContainer}>
                {images.map((image, index) => (
                    <View key={index} style={styles.imageWrapper}>
                        <Image
                            source={{ uri: image.path }}
                            style={styles.image}
                            resizeMode="contain"
                        />
                        <TouchableOpacity onPress={() => removeImage(index)} style={styles.removeButton}>
                            <AntDesign name="closecircle" color="red" size={20} />
                        </TouchableOpacity>
                    </View>
                ))}
            </View> 

           <TouchableOpacity onPress={choosePhotoFromLibrary} style={styles.button}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.buttonText}>Choose Photo from Library</Text>
                    <AntDesign name='arrowleft' color="Gray" size={18} />
                </View>
            </TouchableOpacity>  */}
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#CCD5AE",
        marginTop: 20,
        width: "90%",
        height: 40,
        borderWidth: 1,
        borderColor: "#88AB8E",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
    },
    buttonText: {
        paddingRight: 5,
        color: "#000",
        fontSize: width * 0.02,
        fontFamily: "IRANYekan",
    },
    imageContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: 20,
    },
    imageWrapper: {
        position: 'relative',
        margin: 5,
        width: "30%",
    },
    image: {
        width: "100%",
        height: 100,
    },
    removeButton: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 15,
        padding: 2,
    },
    container: {
        backgroundColor: 'white',
        padding: 16,
        fontFamily: "IRANYekan",
    },


    dropdown: {
        fontFamily: "IRANYekan",
        position: "relative",
        height: 50,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
    },
    placeholderStyle: {
        fontFamily: "IRANYekan",

        fontSize: 13,
        textAlign: "right",
    },
    selectedTextStyle: {
        fontSize: 14,
        textAlign: "right",
        fontFamily: "IRANYekan",


    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        textAlign: "right",
        fontFamily: "IRANYekan",


    },
    icon: {
        marginRight: 5,
    },
    item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: "IRANYekan",



    },
    selectedStyle: {
        textAlign: "right",
        fontFamily: "IRANYekan",

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14,
        backgroundColor: '#e7f2ef',
        shadowColor: '#000',
        marginTop: 8,
        marginRight: 12,
        paddingHorizontal: 12,
        paddingVertical: 8,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
    },
    textSelectedStyle: {
        marginRight: 5,
        fontSize: 14,
        textAlign: "right",
        fontFamily: "IRANYekan",


    },


});

export default Advertise;
