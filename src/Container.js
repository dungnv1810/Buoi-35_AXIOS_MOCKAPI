import React, {useState, useEffect} from "react";
import axios from "axios";
import Form from "./Components/Form";
import Table from "./Components/Table";
const BASE_URL = 'https://637a3fd17419b414df9d2045.mockapi.io'
const Container = () => {
    const [listUser, setListUser] = useState([])
    // Gọi Api Về
    useEffect(()=>{
        const getUser = async() => {
            try{
                const response = await axios.get(`${BASE_URL}/username`)
                setListUser(response.data)
            }catch(err){
                console.log("err", err)
            }
        }
        getUser()
    },[])
    // Add User Name
    const handleOnclickAddUser = async() => {
        try{
            const response = await axios.post(`${BASE_URL}/username`,{
                name: "Nguyên Văn Dũng",
                phone: '0345630366',
                email: 'dungcoi459@gmail.com',
                address: 'Hương Sơn - Mỹ Đức - Tp. Hà Nội'
            })
            console.log("response post = ", response.data)
            const {status} = response;
            if(status === 201){
                const {data} = response
                setListUser([data, ...listUser])
            }else{
                console.log("Lỗi")
            }
        }catch(err){
            console.log("err", err)
        }
    }
    const handleOnclickEditUser = async() => {

    }

    const handleOnclickDeleteUser = async(userId) => {
        try{
            const response = await axios.delete(`${BASE_URL}/username/${userId}`)
            console.log("delete = ", response)
            const {status} = response;
            if(status === 200){
                const {data} = response;
                const newUser = listUser.filter(item => item.id !== data.id);
                setListUser(newUser)
            }else{
                console.log("Lỗi")
            }
        }catch(err){
            console.log("err", err)
        }
    }
    return(
        <>
            <Form 
                onClick={handleOnclickAddUser}
            />
            <Table
                response={listUser}
                handleOnclickEditUser={handleOnclickEditUser}
                handleOnclickDeleteUser={handleOnclickDeleteUser}
            />
        </>
    )
}
export default Container;