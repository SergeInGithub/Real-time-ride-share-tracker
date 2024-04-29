import React, { useCallback, useEffect, useState } from 'react';
import {
  GoogleMap,
  Marker,
  Polyline,
  useJsApiLoader,
} from '@react-google-maps/api';
import { center, containerStyle, intermediateStops } from '../../data/mapsData';

type IMapProps = {
  driverLocation: {
    lat: number;
    lng: number;
    name: string;
  };
  setDriverLocationIndex: React.Dispatch<React.SetStateAction<number>>;
};

export const Map = ({ driverLocation, setDriverLocationIndex }: IMapProps) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_API_KEY as string,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback((map: any) => setMap(map), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDriverLocationIndex((prevIndex: number) =>
        prevIndex < intermediateStops.length - 1 ? prevIndex + 1 : prevIndex,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute w-full h-[60%] top-[30%]" id="map">
      {isLoaded ? (
        <div className="relative w-full mb-6 overflow-hidden h-80">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
            onLoad={onLoad}
          >
            {intermediateStops.map((stop, index) => (
              <Marker
                key={index}
                position={stop}
                label={{ text: stop.name, color: 'white', fontWeight: 'bold' }}
              />
            ))}
            {driverLocation && (
              <Marker
                position={driverLocation}
                icon={{
                  url: 'https://static-00.iconduck.com/assets.00/taxi-driver-illustration-512x399-htvnrr03.png',
                  scaledSize: new window.google.maps.Size(50, 50),
                }}
              />
            )}
            <Polyline
              path={intermediateStops}
              options={{ strokeColor: '#209CEE' }}
            />
          </GoogleMap>
        </div>
      ) : (
        <div className="flex mt-[50%] justify-center text-xl font-bold text-center text-white">
          Map Loading...
        </div>
      )}
    </div>
  );
};
