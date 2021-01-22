import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import placeholder from '../../Assets/placeholder.svg';
import styles from './styles.module.css';

mapboxgl.accessToken = 'pk.eyJ1Ijoia29zYXJhbnRvbmkiLCJhIjoiY2s5NXk2bXloMDJ0djNlbzJta2I2NXJ2OCJ9.TsXULSHvIXtMzShUAkzhjw';

const Map = () => {
  const mapContainerRef = useRef(null);
  const el = document.createElement('div');
  el.className = `${styles.marker}`;
  el.style.backgroundImage = `url(${placeholder})`;

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [30.359, 59.932],
      zoom: 14,
      style: 'mapbox://styles/mapbox/light-v9',
    });

    const marker = new mapboxgl.Marker(el)
      .setLngLat([30.359, 59.932])
      .setOffset([-20, -25])
      .addTo(map);

    // Clean up on unmount
    return () => {
      map.remove();
      marker.remove();
    };
  }, []);

  return (
    <div className="map-container" ref={mapContainerRef} style={{ height: '100%' }} />
  );
};

export default Map;
