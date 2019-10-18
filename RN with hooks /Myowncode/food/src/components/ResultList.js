import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';

const ResultsList = ({ title, results, navigation }) => {
    if (!results.length) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('PDP', { id: item.id })}
                        >
                            {/* <ResultsDetail result={item} /> */}
                            <View style={styles.detail_container}>
                                <Image style={styles.image} source={{ uri: item.image_url }} />
                                <Text style={styles.name}>{item.name}</Text>
                                <Text>
                                    {item.rating} Stars, {item.review_count} Reviews
                                </Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    },

    detail_container: {
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

export default ResultsList;