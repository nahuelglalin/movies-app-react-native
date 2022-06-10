import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ActivityIndicator, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({ children }: Props) => {
    return (
        <View
            style={{
                flex: 1
            }}
        >
            <LinearGradient  
                colors={['#222', '#222', 'black']}
                style={{ ...StyleSheet.absoluteFillObject }}
            />

            {/* Este children son los componentes hijos del 
            <GradientBackground>, que basicamente envuelve a toda la app */}
            {children}


        </View>
    )
}
