import {useEffect, useState} from 'react';
import {EmitterSubscription, Keyboard} from 'react-native';

const useTextInputState = () => {
  const [textInputOpen, setTextInputOpen] = useState(false);

  useEffect(() => {
    let subscription: boolean = true;
    let showSubscription: EmitterSubscription;
    let hideSubscription: EmitterSubscription;
    if (subscription) {
      showSubscription = Keyboard.addListener('keyboardDidShow', () => {
        setTextInputOpen(true);
      });
      hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
        setTextInputOpen(false);
      });
    }
    return () => {
      subscription = false;
      showSubscription?.remove();
      hideSubscription?.remove();
    };
  }, []);

  return {
    textInputOpen,
  };
};

export default useTextInputState;
