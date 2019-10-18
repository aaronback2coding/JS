import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';


const SearchScreen = ({ navigation }) => {
    const [searchstr, setSearchStr] = useState('');
    const [searchAPI, results] = useResults();
    return (
        <View style={{ flex: 1 }}>
            <SearchBar
                str={searchstr}
                onInput={setSearchStr}
                onSubmit={() => searchAPI(searchstr)}
            />
            <ScrollView>
                <ResultList
                    title="Cost Effective"
                    results={results.filter(item => item.price === '$')}
                    navigation={navigation}
                />
                <ResultList
                    title="Bit Pricier"
                    results={results.filter(item => item.price === '$$')}
                    navigation={navigation}
                />
                <ResultList
                    title="Big Spender"
                    results={results.filter(item => item.price === '$$$')}
                    navigation={navigation}
                />
            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default SearchScreen;

