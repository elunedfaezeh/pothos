import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Favs from "./Favs";
import New from "./New";

const Switch = () => {
    const [selected, Setselected] = useState(0)
    return (
        <View style={{  backgroundColor:"#fff",  }}>
            <View style={{
                width: "38%",
                alignSelf: "center",
                marginTop: 20,
                marginBottom: 20,
                height: 47,
                backgroundColor: "white",
                borderWidth: 1,
                borderColor: "#00b064",
                borderRadius: 30,
                flexDirection: "row",
                alignItems: "center",

            }}>
                <TouchableOpacity style={{
                    width: "50%",
                    height: 45,
                    backgroundColor: selected == 0 ? "#00b064" : "white",
                    borderRadius: 30,
                    justifyContent: "center",
                    alignItems: "center",
                }} onPress={() => { Setselected(0); }}
                >
                    <Text style={{
                        color: selected == 0 ? "#fff" : "#000",
                        fontSize: 16, fontWeight: "400", fontFamily: "IRANYekan",
                    }}>فروش</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: "50%",
                    height: 45,
                    backgroundColor: selected == 1 ? "#00b064" : "white",
                    borderRadius: 30,
                    justifyContent: "center",
                    alignItems: "center",
                }} onPress={() => { Setselected(1); }}
                >
                    <Text style={{ color: selected == 1 ? "#fff" : "#000", fontSize: 16, fontWeight: "400", fontFamily: "IRANYekan", }}>اجاره</Text>
                </TouchableOpacity>
            </View>
            {selected == 0 ? (<View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
                <Text><Favs /></Text>
            </View>) : (<View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
                <Text><New /> </Text>
            </View>)}


        </View>
    )
}

export default Switch;