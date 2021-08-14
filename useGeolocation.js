import React, {useEffect, useState} from "react";

const useGeolocation = () => {
  const [location, setlocation] = useState({
    loaded: false,
    allow: false,
    coordinates: {
      lat: "",
      lan: "",
    },
  });

  const success = (pos) => {
    setlocation({
      loaded: true,
      allow: true,
      coordinates: {
        lat: pos.coords.latitude,
        lan: pos.coords.longitude,
      },
    });
  };

  const error = (err) => {
    setlocation((state) => ({
      ...state,
      loaded: true,
      allow: false,
      error: {
        code: 0,
        msg: err.message,
      },
    }));
  };

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
    // }
  }, []);

  return location;
};

export default useGeolocation;
