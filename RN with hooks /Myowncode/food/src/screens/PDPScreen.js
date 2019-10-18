import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Image, View, FlatList } from 'react-native';
import yelp from '../api/yelp';

const PDPScreen = ({ navigation }) => {
    let id = navigation.getParam('id');
    const [result, setResult] = useState({
        name: '',
        image_url: '',
        rating: '',
        review_count: 0,
    });

    const PDPApi = async (id) => {
        console.log(id);
        try {
            const response = await yelp.get(`/${id}`);
            setResult(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        PDPApi(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold'
    }
});

export default PDPScreen;
