import React from "react";
import MapGL, {LanguageControl, Marker} from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import placeholder from "../../Assets/placeholder.svg";
import location from "../../Assets/location.svg";
import styles from "./Contact.module.css"

const Contact = () => {
    return <section className={styles.contactSection}>
        <MapGL
            className={styles.mapContainer}
            mapStyle="mapbox://styles/mapbox/light-v9"
            accessToken={"pk.eyJ1Ijoia29zYXJhbnRvbmkiLCJhIjoiY2s5NXk2bXloMDJ0djNlbzJta2I2NXJ2OCJ9.TsXULSHvIXtMzShUAkzhjw"}
            latitude={59.9316612}
            longitude={30.3574721}
            zoom={15}
        >
            <Marker longitude={30.3574721} latitude={59.9316612} offset={[-10, -25]}>
                <img src={placeholder} alt=""/>
            </Marker>
            <LanguageControl
                language="en"
                defaultLanguage="en"
            />
        </MapGL>
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
                <a href={"tel:+12 345 678 901"}>+12 345 678 901</a>
            </div>
            <a href="https://goo.gl/maps/KDzoTmuTFZhKMjLj7" className={styles.showOnMap}>
                <div>
                    <img src={location} alt=""/>
                </div>
                <span>Show on map</span>
            </a>
            <span className={styles.copyrights}>&copy; 2020 - Lotos Yoga Center</span>
        </div>
    </section>
};

export default Contact;