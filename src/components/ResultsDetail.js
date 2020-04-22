import React, { Children } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url }} />

            <Text style={styles.name}>{result.name}</Text>
            
            <View style={styles.containerDetail}>
                <Text style={{ marginRight: 10 }}>
                    {result.rating} <Entypo name="star" />
                </Text>
                
                <Text>
                    {result.review_count} <Entypo name="new-message" />
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image : {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5,
    },
    name: {
        fontWeight: 'bold',
    },
    containerDetail: {
        flexDirection: 'row'
    },
});

export default ResultsDetail;