import React from 'react';
import {View, Text} from 'react-native';

import {styles} from '../Styles';

export default function Compare() {
  return (
    <>
      <View style={styles.containerTitle}>
        <Text style={styles.mainTitle}>Comparação</Text>
      </View>
      <View style={styles.container}>
        <Text>Compare</Text>
      </View>
    </>
  );
}
