import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {styles} from '../Styles';

export default function Report() {
  return (
    <>
      <View style={styles.containerTitle}>
        <Text style={styles.mainTitle}>Relatório</Text>
      </View>
      <View style={styles.container}>
        <Text>Report</Text>
        <TouchableOpacity style={styles.calcButton} onPress={() => {}}>
          <Text style={styles.buttonText}>Gerar relatório</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
