import React from 'react';
import { View, Animated, Button } from 'react-native';
import { useFade } from '../hooks/useFade';

export const FadeScreen = () => {

    //Custom Hook
   const {opacity, fadeIn, fadeOut} = useFade();

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'grey',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >

            <Animated.View
                style={{
                    backgroundColor: '#084F6A',
                    width: 150,
                    height: 150,
                    borderWidth: 10,
                    borderColor: '#fff',
                    marginBottom: 10,
                    opacity: opacity
                }}
            />

            <Button 
                title="Fade In"
                onPress={fadeIn}
            />

            <Button 
                title="Fade Out"
                onPress={fadeOut}
            />


        </View>
    )
}
