import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoia29zYXJhbnRvbmkiLCJhIjoiY2s5NXk2bXloMDJ0djNlbzJta2I2NXJ2OCJ9.TsXULSHvIXtMzShUAkzhjw';

const Map = () => {
  const mapContainerRef = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [30.3574721, 59.9316612],
      zoom: 14,
      style: 'mapbox://styles/mapbox/light-v9',
    });

    // eslint-disable-next-line no-unused-vars
    const marker = new mapboxgl.Marker()
      .setLngLat([30.3574721, 59.9316612])
      .addTo(map);
    // Clean up on unmount
    return () => map.remove();
  }, []);

  return (
    <div className="map-container" ref={mapContainerRef} style={{ height: '100%' }} />
  );
};

export default Map;
