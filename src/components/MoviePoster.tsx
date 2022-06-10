import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import {useNavigation} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    movie: Movie,
    height?: number;
    width?: number;
}

const MoviePoster = ( {movie, height = 480, width = 320}: Props ) => {
    
    const navigation = useNavigation(); 

    const url = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;
  
    return (
    <TouchableOpacity 
        onPress={() => navigation.navigate('DetailScreen', {movie})}
        activeOpacity={0.6}
        style={{
            width,
            height,
            marginHorizontal: 2,
            paddingBottom: 20,
            paddingHorizontal: 5
        }}
    >
        <View style={styles.imgContainer}>    
            <Image 
                source={{uri: url}}
                style={ styles.image }
            />
        </View>
    </TouchableOpacity>
  )
}

export default MoviePoster

const styles = StyleSheet.create({
    imgContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.4,
        shadowRadius: 3.84,
        elevation: 10
    },
    image: {
        flex: 1,
        borderRadius: 18,
    }
});

