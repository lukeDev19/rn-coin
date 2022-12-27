import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import CoinsScreen from '../screens/Coins';
import CoinDetailScreen from '../screens/CoinDetail';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors} from '../themes';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitleStyle: {
            color: colors.white,
          },
          headerBackTitle: 'Back',
          headerTintColor: colors.activeGreen
        }}>
        <Stack.Screen name="Coins" component={CoinsScreen} />
        <Stack.Screen name="CoinDetailScreen" component={CoinDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
