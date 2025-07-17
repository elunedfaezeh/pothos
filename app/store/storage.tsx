// import AsyncStorage from "@react-native-async-storage/async-storage";

// export const storeData = async (key: string, value: any) => {
//     try {
//         const jsonValue = JSON.stringify(value);
//         await AsyncStorage.setItem(key, jsonValue);
//     } catch (e) {
//         // saving error    
//     }
// };

export const getData = async (key: string) => {
    // try {
    //     const jsonValue = await AsyncStorage.getItem(key);
    //     return jsonValue != null ? JSON.parse(jsonValue) : null;
    // } catch (e) {
    //     // error reading value    
    // }
};

// export const removeData = async (key: string) => {
//     try {
//         await AsyncStorage.removeItem(key);
//     } catch (e) {
//         // remove error 
//     }
//     console.log('Done.')
// };

// export const clearAll = async () => {
//     try {
//         await AsyncStorage.clear();
//     } catch (e) {
//         // clear error 
//     }
//     console.log('Done.')
// }