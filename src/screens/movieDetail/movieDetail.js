import { View, Text } from 'react-native'
import React from 'react'

const MovieDetail = (props) => {
    const {Title, Year, Plot, Poster} = props.route.params.movie
  return (
    <View>
      <Text>MovieDetail</Text>
      <Text>{Title}</Text>
      <Text>{Year}</Text>
      <Text>{Plot}</Text>
      <Text>{Poster}</Text>
    </View>
  )
}

export default MovieDetail