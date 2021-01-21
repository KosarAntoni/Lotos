import React from 'react';
// import MapGL, { Marker } from 'react-map-gl';
// import placeholder from '../../Assets/placeholder.svg';
import location from '../../Assets/location.svg';
import styles from './styles.module.css';
import Map from './Map';

const Contact = () => (
  <section className={styles.contactSection}>
    <div className={styles.mapContainer}>
      <Map />
    </div>

    <div className={styles.textContainer}>
      <div>
        <h1>Location:</h1>
        <span>St. Petersburg,</span>
        <span>Nevski prospekt 108</span>
      </div>
      <div>

        <h1>Email:</h1>
        <a href="mailto:Lotos-yoga@gmail.com">Lotos-yoga@gmail.com</a>
      </div>
      <div>
        <h1>Phone:</h1>
        <a href="tel:+12 345 678 901">+12 345 678 901</a>
      </div>
      <a href="https://goo.gl/maps/KDzoTmuTFZhKMjLj7" className={styles.showOnMap}>
        <div>
          <img src={location} alt="" />
        </div>
        <span>Show on map</span>
      </a>
      <span className={styles.copyrights}>&copy; 2020 - Lotos Yoga Center</span>
    </div>
  </section>
);
export default Contact;
