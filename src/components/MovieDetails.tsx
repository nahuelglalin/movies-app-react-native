import React from 'react';
import { View, Text } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CastItem } from './CastItem';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {


    return (
        <>
            {/* Detalles */}
            <View style={{marginHorizontal: 20}}>
                <View style={{flexDirection: 'row'}}>
                    <Ionicons 
                        name="star-outline" 
                        size={16} 
                        style={{color: '#fff', opacity: 0.4}} 
                    />

                    <Text style={{marginLeft: 5, color: '#fff'}}>
                         {movieFull.vote_average}
                    </Text>

                    <Text style={{marginLeft: 5, color: '#fff', opacity: 0.4}}>
                        - {movieFull.genres.map(item => item.name).join(', ')}
                    </Text>
                </View>

                {/* Detalles */}
                <Text style={{color: '#fff', fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>
                    Historia
                </Text>

                <Text style={{fontSize: 16, color: '#fff', opacity: 0.4}}>
                    {movieFull.overview}
                </Text>

                {/* Casting */}
                <View style={{marginBottom: 20}}>
                    <Text style={{color: '#fff', fontSize: 20, marginTop: 20, marginBottom: 10, fontWeight: 'bold'}}>
                        Actores
                    </Text>

                    <FlatList 
                        data={cast}
                        renderItem={({ item }: any) =>
                            (<CastItem actor={item} />)
                        }
                        keyExtractor={(item: any) => item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{marginTop: 10, height: 80}}
                    />
                </View>




            </View>

            {/* Casting */}
        </>
    )
}
