import { Restaurant } from '@mui/icons-material';
import React from 'react'
import { useEffect,useState } from 'react';
import Layout from '../layout/layout'
import img from '../../assets/signin_img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './style.module.css'
import FoodItem from './foodItem';
import Items from '../../items'
function Menu() {
    function MenuList(props) {
        const data = props.data;
        return data.map((e) => {
            return (
                <>
                    <FoodItem foodName={e.menuName} foodPrice={e.price} foodType={e.type} category={e.category} />
                </>
            )
        })
    }
    const menuChange = (e) => {
        alert(`menu Chane called ${e}`);
    }
    return (
        <Layout>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='d-flex'>
                        <div className='col-lg-8 p-1'>
                            <img src={img} className={styles.restaurantImg} alt="restaurantImg" />
                        </div>
                        <div className='col-lg-4 p-1'>
                            <img src={img} className={styles.restaurantImg} alt="restaurantImg" />
                        </div>
                    </div>
                    <div className='m-3'>
                        <h2 className='fw-bold'>KFC</h2>
                        <p className={styles.subtitle}>Burger, Fast Food, Beverages</p>
                        <p className={styles.subtitle}>Kharabela Nagar, Bhubaneshwar</p>
                    </div>
                    <div className='d-flex'>
                        <div className='col-lg-3 border'>
                            <h5 className='m-2 '>Order Categories</h5>
                            <div className={styles.category} onClick={menuChange('Drinks')}>Drinks</div>
                            <div className={styles.category} onClick={menuChange('Dessrets')}>Dessert</div>
                            <div className={styles.category} onClick={menuChange('starter')}>Starter</div>
                        </div>
                        <div className={styles.menuList} id='menuDisplay'>
                            <MenuList data={Items} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Menu
