import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from '@react-navigation/native';
import MyDrawer from "../Layouts/Drawer";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import BottomTabs from "../Layouts/Bottoms";
const NextButton = (props: any) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {navigation.navigate("Login") }} style={{
                marginTop: -30,
                alignSelf: 'stretch',
                paddingVertical: 10,
                paddingHorizontal: 80,
                justifyContent: "center", alignItems: "center",
                backgroundColor: "#00b064",
                borderWidth: 1, borderColor: "#88AB8E",
                borderRadius: 10, shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,

            }}>

                <Text style={{
                    paddingRight: 5,
                    color: "#fff",
                    fontSize: 15,
                    fontFamily: "IRANSansWeb(FaNum)",
                }}> ورود به حساب کاربری </Text>


            </TouchableOpacity>
            <TouchableOpacity  onPress={() => {navigation.navigate(MyDrawer) }} style={{
                alignSelf: 'stretch',
                paddingVertical: 10,
                paddingHorizontal: 80,
                justifyContent: "center", alignItems: "center",
                backgroundColor: "black", marginTop: 10,
                borderWidth: 1, borderColor: "#88AB8E",
                borderRadius: 10, shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
            }}>

                <Text style={{
                    paddingRight: 5,
                    color: "#fff",
                    fontSize: 15,
                    fontFamily: "IRANSansWeb(FaNum)",
                }}> ادامه به عنوان مهمان </Text>


            </TouchableOpacity>
        </View>
    )
}
export default NextButton;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})