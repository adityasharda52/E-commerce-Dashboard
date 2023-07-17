import React,{useState} from 'react';

const AddProduct = ()=>{
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [category,setCategory] = useState("");
    const [company,setCompany] = useState("");

    const sendData = async ()=>{
        console.log(name,price,category,company);
        let userId = JSON.parse(localStorage.getItem('user'));
        userId = userId._id;
        let result = await fetch('http://localhost:5000/add-product',{
            method:"POST",
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        result = await result.json();
        console.log(result);
    }
    return(
        <div className='product'>
            <h1>Add Product</h1>
            <input value={name} className="inputBox" type='text' placeholder='Enter Product Name' onChange={(e)=>setName(e.target.value)}></input>
            <input value={price} className="inputBox" type='text' placeholder='Enter Product Price' onChange={(e)=>setPrice(e.target.value)}></input>
            <input value={category} className="inputBox" type='text' placeholder='Enter Product Category' onChange={(e)=>setCategory(e.target.value)}></input>
            <input value={company} className="inputBox" type='text' placeholder='Enter Company Name' onChange={(e)=>setCompany(e.target.value)}></input>
            <button onClick={sendData} className="appButton" type='button'>Add Product</button>
        </div>
    )
}

export default AddProduct;