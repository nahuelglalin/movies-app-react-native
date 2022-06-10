import { useRef } from 'react';
import {Animated} from 'react-native';

export const useFade = () => {

    //cuando se crea el FadeScreen, creamos la opacidad, que por
    //defecto esta en 0
    const opacity = useRef(new Animated.Value(0)).current;

    //funcion para hacer el fade in (estitico)
    const fadeIn = () => {
        Animated.timing(
            opacity, 
            {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
            }
        ).start();
    }

    const fadeOut = () => {
        Animated.timing(
            opacity, 
            {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
            }
        ).start();
    }

  return {
    opacity,
    fadeIn,
    fadeOut
  }
}
