import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import { RootStackParams } from '../navigation/NavigationScreen';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GradientBackground } from '../components/GradientBackground';

const screenHeight = Dimensions.get('screen').height;

//StackScreenProps recibe 2 params. El primero es RootStackParams (esto
//viene de NavigationScreen. Es donde se definen las rutas y que params recibe cada una)
//El 2do params es el nomnbre del componente en el que estoy trabajando actualmente
interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {
}

export const DetailScreen = ({ route }: Props) => {

  const navigation = useNavigation();

  //con movie accedo a la info de la pelicula que seleccione el usuario
  const movie = route.params.movie;

  const url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  //informacion para mostrar de la pelicula
  const { isLoading, cast, movieFull } = useMovieDetails(movie.id);

  return (
    <GradientBackground>
      <ScrollView>

        <View style={style.imageContainer}>
          <View style={style.imageBorder}>
            <Image
              source={{ uri: url }}
              style={style.posterImage}
            />
          </View>
        </View>

        <View style={style.marginContainer}>
          <Text style={style.subtitle} >{movie.original_title}</Text>
          <Text style={style.title} >{movie.title}</Text>
        </View>


        {
          isLoading ?
            <ActivityIndicator size={30} color="grey" style={{ marginTop: 20 }} />
            :
            <MovieDetails movieFull={movieFull!} cast={cast} />
        }

        {/* Boton para volver a la pantalla Anterior */}
        <View style={style.backButton}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons
              name="ios-arrow-back"
              size={35}
              color="white"

            />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </GradientBackground>
  )
}

export const style = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,//el 70% de la pantalla
    shafowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
    elevation: 10,
    marginTop: -10
  },

  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25
  },

  posterImage: {
    flex: 1,
    width: '100%',
    height: 300,
    resizeMode: 'cover'
  },

  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },

  subtitle: {
    fontSize: 16,
    opacity: 0.4,
    color: '#fff'
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },

  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 30,
    left: 20
  }
});