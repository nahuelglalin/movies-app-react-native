import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { View, ActivityIndicator, Dimensions } from 'react-native';
import MoviePoster from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../hooks/useMovies';
import { ScrollView } from 'react-native-gesture-handler';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';

//para saber cual es el width del dispositivo
const widowWidth = Dimensions.get('window').width;

export const HomeScreen = () => {

  //state para manejar las peliculas
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();

  const safeArea = useSafeAreaInsets();

  //Si la rta de mi api esta cargando, mostrame un componente de carga
  //el <ActivityIndicator /> es la tipica ruedita de "loading"
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="red" size={20} />
      </View>
    )
  }

  return (
    <GradientBackground >
      <ScrollView>
        <View style={{ marginTop: safeArea.top + 20}}>

          {/* Carousel Principal */}
          <View style={{ height: 480}}>
            <Carousel
              data={nowPlaying}
              renderItem={({ item }: any) => <MoviePoster movie={item} />}
              sliderWidth={widowWidth}
              itemWidth={320}
              style={{ backgroundColor: 'red' }}            
            />
          </View>

          <HorizontalSlider title="Popular" movies={popular} />
          <HorizontalSlider title="Top Rated" movies={topRated} />
          <HorizontalSlider title="Upcoming" movies={upcoming} />

        </View>
      </ScrollView>
    </GradientBackground>

  )
}
