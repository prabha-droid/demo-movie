import { createStackNavigator } from '@react-navigation/stack';
import MovieDetail from '../screens/movieDetail/movieDetail';
import MovieList from '../screens/moviesList/movieList';
import History from '../screens/history.js/history';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MovieList" component={MovieList} />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
      <Stack.Screen name="History" component={History} />
      
    </Stack.Navigator>
  );
}