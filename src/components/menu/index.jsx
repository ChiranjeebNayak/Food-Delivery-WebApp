import { Restaurant } from '@mui/icons-material';
import React from 'react'
import Layout from '../layout/layout'
import img from '../../assets/signin_img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './style.module.css'


function Menu() {
    function MenuList(props) {
        const data = props.data;
        return data.map((e) => {
            return (
                <>
                    <div className={`col-12 p-4 ${styles.card}`}>
                        <div className="card-body row">
                            <li>{e.menuName}</li>
                            <li>{e.price}/{e.type}</li>
                            <li>{e.category}</li>
                        </div>
                    </div>
                </>
            )
        })
    }
    const Category = (props) => {
        const data = props.data;
        const categories = new Set();
        data.map((e) => {
            categories.add(e.category);
        })
        console.log(categories);
        const listItem = [categories]
        return listItem.map((item) =>{
            return (
                <>
                    <div className={styles.category}>{item}</div>
                </>
            )
        })
        

        
    }
    const menuData = [{
        "id": 1,
        "menuName": "Chiken Curry",
        "price": 200,
        "type": "plate",
        "category": "Nonveg"
    },
    {
        "id": 2,
        "menuName": "Chiken Tikka",
        "price": 250,
        "type": "plate",
        "category": "Nonveg"
    },
    {
        "id": 3,
        "menuName": "Panner Curry",
        "price": 150,
        "type": "plate",
        "category": "Veg"
    },
    {
        "id": 4,
        "menuName": "Masala Drinks",
        "price": 70,
        "type": "glass",
        "category": "Dessert"
    },
    {
        "id": 5,
        "menuName": "Gulab Jammun",
        "price": 50,
        "type": "piece",
        "category": "Dessert"
    }
    ]
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
                            <h5 className='m-2'>Order Categories</h5>
                            <Category data={menuData} />
                        </div>
                        <div className='col-lg-9'>
                            <h5 className='m-2'>Order Items</h5>
                            <MenuList data={menuData} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Menu
