import React from 'react'
import Layout from '../layout/layout'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Index() {
    const [cityName,setCityName] = useState('');
    const navigate = useNavigate();

    const cityNameHandler = (e) =>{
        e.preventDefault();
        setCityName(e.target.value);
    }
    const formHandler = () =>{
        navigate(`/restaurants?cityName=${cityName}`);
    }
    return (
        <>
            <Layout>
                <div className='container p-3 d-flex '>
                    <input className='form-control p-2 w-50 m-3' placeholder='Enter Your Destination' onChange={cityNameHandler}></input>
                    <button className='btn btn-warning fw-bold w-25 m-3' onClick={formHandler}>Search</button>
                </div>
            </Layout>
        </>
    )
}

export default Index
