import { Restaurant } from '@mui/icons-material';
import React from 'react'
import Layout from '../layout/layout'
import img from '../../assets/signin_img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './style.module.css'
import { useNavigate } from 'react-router-dom';
import Filter from './filter';

function Index() {
    let params = new URLSearchParams(window.location.search);
    const cityName = params.get('cityName');
    const navigate = useNavigate();
    const restaurantHandler = (props) => {
        console.log(props);
        navigate(`/menu?restaurantId=${props}`);
    }
    function Restaurant(props) {
        const data = props.data;
        return data.map((e) => {
            return (
                <>
                    <div className={`col-lg-4 col-md-6 col-sm-12 p-4  ${styles.card}`} onClick={() => restaurantHandler(e.id)}>
                        <img className={`img-fluid`} src={img} alt="Card image cap" />
                        <div className="row mt-2">
                            <div className='col-9'>
                                <h5 className=" text-start">{e.restaurantName}</h5>
                            </div>
                            <div className={`col-3 ${styles.rating}`}>
                                <div>{e.rating}<FontAwesomeIcon className={styles.ratingIcon} icon={faStar} /></div>
                            </div>
                        </div>
                    </div>
                </>
            )
        })
    }
    const restaurantData = [{
        "id": 1,
        "restaurantName": "KFC",
        "rating": 4.3
    },
    {
        "id": 2,
        "restaurantName": "Dominos",
        "rating": 4.5
    },
    {
        "id": 3,
        "restaurantName": "Tamia",
        "rating": 4.1
    },
    {
        "id": 4,
        "restaurantName": "Dambru",
        "rating": 4.0
    },
    {
        "id": 5,
        "restaurantName": "Chiranjeeb",
        "rating": 4.1
    },
    {
        "id": 6,
        "restaurantName": "Abishek",
        "rating": 3.9
    }
    ]
    return (
        <Layout>
            {/* i am in {cityName} 's restaurant */}
            <div className='container'>
                <div className='row p-3'>
                    <div className='col-lg-9'>
                        <div className='row'><Restaurant data={restaurantData} /></div>
                    </div>
                    <div className='col-lg-3 '>
                        <Filter/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Index
