import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PeoplePage from '../../src/pages/PeoplePage';
import PeopleDetailPage from '../../src/pages/PeopleDetailPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
            headerStyle: {
                backgroundColor: '#6ca2f7',
                borderBottomWidth: 1,
                borderBottomColor: '#C5C5C5'
            },
            headerTitleStyle: {
                color: '#fff',
                fontSize: 30,
                flexGrow: 1,
            },
            headerTitleAlign: 'center',
            headerTintColor: 'white',
        }}
      >
      <Stack.Screen
        name="Pessoas"
        component={PeoplePage}
      />
      <Stack.Screen
        name="PeopleDetail"
        component={PeopleDetailPage}
        options={({ route }) => {
            const peopleName = route.params?.people?.name?.first + ' ' + route.params?.people?.name?.last;
            return {
                title: peopleName
            };
        }}
      />
      </Stack.Navigator>
  );
}
