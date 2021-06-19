import {useState} from 'react';
import {useEffect} from 'react';
import {AppState} from 'react-native';

export const useIsForeground = () => {
  const [isForeground, setIsForeground] = useState(true);

  useEffect(() => {
    const onChange = state => {
      setIsForeground(state === 'active');
    };
    AppState.addEventListener('change', onChange);
    return () => AppState.removeEventListener('change', onChange);
  }, [setIsForeground]);

  return isForeground;
};
