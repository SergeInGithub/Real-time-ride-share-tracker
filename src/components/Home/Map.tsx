import React, { useEffect, useState } from 'react';

export const Map = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [accuracy, setAccuracy] = useState<number | null>(null);
  const [altitude, setAltitude] = useState<number | null>(null);
  const [heading, setHeading] = useState<number | null>(null);
  const [speed, setSpeed] = useState<number | null>(null);
  const [reqCount, setReqCount] = useState(0);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(successCallback);

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  navigator.geolocation.watchPosition(successCallback);

  function successCallback(position: {
    coords: {
      speed: any;
      latitude: any;
      longitude: any;
      accuracy: any;
      altitude: any;
      heading: any;
    };
  }) {
    const { speed, latitude, longitude, accuracy, altitude, heading } =
      position.coords;

    setReqCount((prevReqCount) => prevReqCount + 1);

    setLatitude(latitude);
    setLongitude(longitude);
    setAccuracy(accuracy);
    setAltitude(altitude);
    setHeading(heading);
    setSpeed(speed);
    setSpeed(speed);
  }

  useEffect(() => {
    console.log('Count', reqCount);
    console.log('Speed', speed);
    console.log('Count', accuracy);
    console.log('Count', altitude);
    console.log('Count', heading);
  }, [speed, reqCount, accuracy, altitude, heading]);

  return (
    <div className="absolute w-full h-[60%] top-[30%]" id="map">
      <iframe
        src={`https://maps.google.com/maps?q=+${latitude}, +${longitude}+&amp;z=15&amp;output=embed`}
        className="w-full h-full"
      />
    </div>
  );
};
