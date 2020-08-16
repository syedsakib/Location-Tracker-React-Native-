import { useState, useEffect } from 'react';
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from 'expo-location';

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  let sub;
  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        // (location) => {
        //   //console.log(location);
        //   addLocation(location);
        // }
        callback
      );
      setSubscriber(sub);
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      subscriber.remove();
      setSubscriber(null);
    }
  }, [shouldTrack]);

  //     if (shouldTrack) {
  //       startWatching();
  //     } else {
  //       if (subscriber) {
  //         subscriber.remove();
  //       }
  //       setSubscriber = null;
  //     }
  //     return () => {
  //       if (subscriber) {
  //         subscriber.remove();
  //       }
  //     };
  //   }, [shouldTrack, callback]);

  return [err];
};
