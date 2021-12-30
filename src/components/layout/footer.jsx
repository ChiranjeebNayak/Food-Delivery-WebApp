import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './layout.module.css'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faEnvelopeSquare, faPhone } from '@fortawesome/free-solid-svg-icons'
function Footer() {
  return (
    <>
      <div className={`container-fluid ${styles.footer}`} style={{ background: "#282c35" }}>
        <div className="container text-light mt-3">
          <div className='row p-3'>
            <div className='col-lg-3 col-md-12'>
              <p className={`${styles.footerTitle}`}>Popular Cities</p>
              <ul className="list-unstyled">
                <li className='mt-2'>
                  <a className={`${styles.footerLink}`} href="#">Berhampur</a>
                </li>
                <li className='mt-2'>
                  <a className={`${styles.footerLink}`} href="#">Bhubaneswar</a>
                </li>
                <li className='mt-2'>
                  <a className={`${styles.footerLink}`} href="#">Bhadrak</a>
                </li>
                <li className='mt-2'>
                  <a className={`${styles.footerLink}`} href="#">Cuttack</a>
                </li>
              </ul>
            </div>
            <div className='col-lg-3 col-md-12'>
              <p className={`${styles.footerTitle}`}>Popular Cuisnies</p>
              <ul className="list-unstyled">
                <li className='mt-2'>
                  <a className={`${styles.footerLink}`} href="#">BBQ</a>
                </li>
                <li className='mt-2'>
                  <a className={`${styles.footerLink}`} href="#">Apple Juice</a>
                </li>
                <li className='mt-2'>
                  <a className={`${styles.footerLink}`} href="#">Chicken Roast</a>
                </li>
                <li className='mt-2'>
                  <a className={`${styles.footerLink}`} href="#">Hot Dogs</a>
                </li>
              </ul>
            </div>
            <div className='col-lg-3 col-md-12'>
              <p className={`${styles.footerTitle}`}>Menu</p>
              <ul className="list-unstyled">
                <li className='mt-2'>
                  <a className={`${styles.footerLink}`} href="#">Home</a>
                </li>
                <li className='mt-2'>
                  <a className={`${styles.footerLink}`} href="#">Contact</a>
                </li>
                <li className='mt-2'>
                  <a className={`${styles.footerLink}`} href="#">FAQ'S</a>
                </li>
                <li className='mt-2'>
                  <a className={`${styles.footerLink}`} href="#">How it works</a>
                </li>
              </ul>
            </div>
            <div className='col-lg-3 col-md-12'>
              <p className={`${styles.footerTitle}`}>Connect</p>
              <div className='d-flex'>
                <FontAwesomeIcon className={`${styles.footerSocialIcon}`} icon={faTwitter}/>
                <FontAwesomeIcon className={`${styles.footerSocialIcon}`} icon={faFacebook}/>
                <FontAwesomeIcon className={`${styles.footerSocialIcon}`} icon={faInstagram}/>
              </div>
              <div className='mt-3 d-flex'>
              <FontAwesomeIcon className={`${styles.footerIcon}`}  icon={faPhone}/><span>+91 6372117831</span>
              </div>
              <div className='mt-3 d-flex'>
              <FontAwesomeIcon className={`${styles.footerIcon}`}  icon={faEnvelope}/><span>chiranjeebnayak.37@gmail.com</span>
              </div>
            </div>
          </div>

          {/* copyright */}
          <div className='mt-3'>
            <p className='text-uppercase'>© 2021 FOOD Delivery. ALL RIGHTS RESERVED. POWERED BY <span style={{color:"orange"}}>CHiranjeeb Nayak</span> & <span style={{color:"orange"}}>Abishek Kumar</span></p>
          </div>


        </div>
      </div>
    </>
  )
}

export default Footer
