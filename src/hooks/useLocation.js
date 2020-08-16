import { useState, useEffect } from 'react';
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from 'expo-location';

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  // const [subscriber, setSubscriber] = useState(null);

  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      try {
        await requestPermissionsAsync();
        subscriber = await watchPositionAsync(
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
      } catch (e) {
        setErr(e);
      }
    };

    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      Subscriber = null;
    }
    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);

  return [err];
};
