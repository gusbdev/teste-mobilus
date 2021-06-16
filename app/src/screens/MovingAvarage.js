import React, {useEffect, useState} from 'react';
import {Alert, View, Text, TouchableOpacity} from 'react-native';

import {styles} from '../Styles';
import {allCases} from '../services/cases';

export default function MovingAvarage() {
  const [twoWeeks, setTwoWeeks] = useState([]);
  const [movingAvarage, setMovingAvarage] = useState(0);

  function callAllCases() {
    allCases()
      .then(response => {
        if (response) {
          setTwoWeeks(
            response.data.slice(
              response.data.length - 14,
              response.data.length,
            ),
          );
        }
      })
      .catch(error => {
        Alert.alert(error);
        console.log(error);
      });
  }

  function calcMovingAvarage() {
    var totalDeaths = 0;
    var result = 0;

    totalDeaths = twoWeeks[13].Deaths - twoWeeks[0].Deaths;

    result = totalDeaths / twoWeeks.length;
    console.log(result);
    setMovingAvarage(result);
  }

  useEffect(() => {
    callAllCases();
  }, []);

  return (
    <>
      <View style={styles.containerTitle}>
        <Text style={styles.mainTitle}>Média Móvel</Text>
      </View>
      <View style={styles.container}>
        <Text>{movingAvarage ? Math.trunc(movingAvarage) : ''}</Text>
        <TouchableOpacity
          style={styles.calcButton}
          onPress={() => calcMovingAvarage()}>
          <Text style={styles.buttonText}>Exibir média móvel</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
