import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import img from '../../assets/signin_img.jpg'
import styles from './style.module.css'

function FoodItem(props) {
    return (
        <div className='row p-2'>
            <div className='col-3'>
                <img src={img} className={styles.foodPic} alt="foodPic"/>
            </div>
            <div className='col-6 mt-3'>
            <p className={styles.foodName}>{props.foodName}</p>
            <p className={styles.foodPrice}>₹ {props.foodPrice}.00  /  {props.foodType}</p>
            </div>
            <div className='col-3 mt-3'>
                <p className={styles.foodAdd}>Add <FontAwesomeIcon className={styles.addIcon} icon={faPlus}/> </p>
            </div>
        </div>
    )
}

export default FoodItem
