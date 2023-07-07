import { View, Text, TextInput, FlatList, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'

const MovieList = ({navigation}) => {
    const [movieList, setMovieList] = useState([])
    const [searchText, setSearchText] = useState('')
    const [history, setHistory] = useState([])

    const searchData = async(input) => {
        const response = await fetch(`https://www.omdbapi.com/?t=${input}&apikey=57ed164d`)
        const movies = await response?.json();
        setMovieList(movies)
        let entryDetail = {title: input, date : new Date()}
        if(history != []) {
            let tempHistory = history;
            tempHistory.push(entryDetail)
            setHistory(tempHistory)       
        } else {
            setHistory(entryDetail)
        }

    }
    const searchHistory = () => { 
        navigation.navigate('History', {data: history})   
    }

  return (
    <View>
      <TextInput value={searchText} 
      onChangeText={(val) => {setSearchText(val) }}
      style={styles.searchBar} />
      <Button title='Search' onPress={() => searchData(searchText)} />
      <Button title='Search History' onPress={() => {searchHistory()}} />

      {movieList && <FlatList data={[movieList]}
      ListEmptyComponent={() => {
        return(
            <Text>No data</Text>
        )
      }}
      renderItem={({item}) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('MovieDetail', {movie: item})}>
            <View>
            <Text>{item.Title}</Text>
        </View>
        </TouchableOpacity>
        )
      }}
      keyExtractor={index => index}   

      />
}
    </View>
  )
}

export default MovieList