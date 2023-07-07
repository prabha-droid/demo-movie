import { View, Text, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'

const History = (props) => {
    const {title, date} = props.route.params.data
    const [history, setHistory] = useState([])
   useEffect(() => {
    setHistory(props.route.params.data)
   }, [])


  return (
    <View>
      <FlatList data={history}
      ListEmptyComponent={() => {
        return(
            <Text>No data</Text>
        )
      }}
      renderItem={({item}) => {
        return (
            <View>
            <Text>{item.title}</Text>
        </View>
        )
      }}
      keyExtractor={index => index}   

      />
    </View>
  )
}

export default History