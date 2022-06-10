import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieInterface';

export type RootStackParams = {
  HomeScreen: undefined;//undefined pq la ruta HomeScreen no recibe parametros
  DetailScreen: { movie: Movie };//la ruta DetailScreen recibe un parametro movie
}

const Stack = createStackNavigator<RootStackParams>();

export const NavigationScreen = () => {
    return (
      <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: '#f0f0f5',
            }
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    );
  }