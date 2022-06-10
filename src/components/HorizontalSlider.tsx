import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import MoviePoster from './MoviePoster';

interface Props {
    title?: string;
    movies: Movie[];
}

export const HorizontalSlider = ({ title, movies }: Props) => {
    return (
        <View style={{ 
            height: (title) ? 260 : 220
        }}>

            {
                title && <Text style={{ color: '#fff',fontSize: 25, fontWeight: 'bold', marginLeft: 10, marginBottom: 10 }}>{title}</Text>
            }

            <FlatList
                data={movies}
                renderItem={({ item }: any) =>
                    (<MoviePoster movie={item} width={140} height={200} />)
                }
                keyExtractor={(item: any) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}
