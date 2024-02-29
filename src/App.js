import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
const BASE_URL = 'https://637a3fd17419b414df9d2045.mockapi.io';

function App() {
  const [listUser, setListUser] = useState([])
  // Cách 1: 
  useEffect(()=>{
    // Cachs 1.1:
    // fetch('https://637a3fd17419b414df9d2045.mockapi.io/username')
    // .then(res => res.json())
    // .then(res => {
    //   setListUser(res)
    // })
    // .catch(err => {
    //   alert('Lối', err)
    // })

    // Cách 2.1:
    const getUser = async() => {
      const response = await axios.get(`${BASE_URL}/username`)
      console.log(response)
      try{
        setListUser(response.data)
      }catch(err){
        console.log("err = ", err) 
      }
    }
    getUser()
  },[]);

  const handleAddUserName = async() => {
    try{
      const response = await axios.post(`${BASE_URL}/username`, {
        name: 'Nguyễn Văn Dũng',
        phone: '0345630366',
        address: 'Hương Sơn, Mỹ Đức, Tp. Hà Nội',
      })
      if(response.status === 201){
        setListUser([response.data, ...listUser])
      }else{
        console.log("Lỗi")
      }
    }catch(err){
      console.log("err", err)
    }
  }

  
  // Cách 2:
  (async()=>{

  })() // Fucntion vô danh được thực thi ngay => không cần thông qua tên hàm 

  const handleDeleteUsername = async(id) => {
    console.log("id = ", id)
    try{
      const response = await axios.delete(`${BASE_URL}/username/${id}`) 
      console.log("Delete = ", response)
      if(response.status === 200){
        const {data} = response
        const newData = listUser.filter(item => item.id !== data.id );
        setListUser(newData)
      }else{
        console.log("Lỗi")
      }
    }catch(err){
      console.log("err = ", err)
    }
  }

  const handleEditUserName = async(id) => {
    try{
      const response = await axios.put(`${BASE_URL}/username/${id}`,{
        name: "Nguyễn Thị Thùy Linh",
        phone: "0345630366",
        address: "Hải Phòng"
      })
      console.log("response = ", response)
      const {status} = response
      if(status === 200){
        const {data} = response
        const newData = listUser.map((item, array, index) => {
          if(item.id === data.id){
            return data
          }
          return item
        })
        setListUser (newData)
      }
    }catch(err){
      console.log("err", err)
    }
  }

  return (
    <div className='App'>
      <table border='0' cellPadding='10' cellSpacing="0">
        <tr>
          <td colSpan='6'>
            <button onClick={handleAddUserName}>AddUserName</button>
          </td>
        </tr>
        <tr>
          <th>ID</th>
          <th>UserName</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
        {
          listUser.map((item, array, index)=>{
            return(
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>
                  <button onClick={()=>handleEditUserName(item.id)}>Edit</button>
                  <button onClick={()=>handleDeleteUsername(item.id)}>Delete</button>
                </td>
              </tr>
            )
          })
        }
        
      </table>
    </div>
  );
}

export default App;
