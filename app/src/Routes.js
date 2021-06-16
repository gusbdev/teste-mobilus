import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

import MovingAvarage from '../src/screens/MovingAvarage';
import Compare from '../src/screens/Compare';

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Média Móvel"
          component={MovingAvarage}
          options={{
            tabBarIcon: ({focused}) => (
              <Feather focused={focused} name="activity" size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="Comparação"
          component={Compare}
          options={{
            tabBarIcon: ({focused}) => (
              <Feather focused={focused} name="bar-chart-2" size={28} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
