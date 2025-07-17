import axios from 'axios';

const url = 'https://api.doukme.ir/user/';

export const authUser = (data: any) => {
    try {
        axios.post(url + 'authUser', data).then((response) => {
            console.log(response)
            return response
            // if(response.success==true){
            //     // storeData("user",response.data)
            // }
        })
        //dispatch(logIn(response));
    } catch (error) {
        console.error('Error fetching data: ', error);

    };
}

export const getUsers = async () => {
    axios.get(url + 'getUser')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
        });
}
