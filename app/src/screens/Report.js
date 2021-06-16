import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {styles} from '../Styles';
import {allCases} from '../services/cases';

export default function Report() {
  const [lastMonth, setLastMonth] = useState([]);

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
