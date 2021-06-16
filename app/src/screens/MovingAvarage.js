import React, {useEffect, useState} from 'react';
import {Alert, View, Text, TouchableOpacity} from 'react-native';

import {styles} from '../Styles';
import {allCases} from '../services/cases';

export default function MovingAvarage() {
  const [twoWeeks, setTwoWeeks] = useState([]);
  const [movingAvarage, setMovingAvarage] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);

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
    var deaths = 0;
    var result = 0;

    deaths = twoWeeks[13].Deaths - twoWeeks[0].Deaths;

    result = totalDeaths / twoWeeks.length;
    console.log(result);
    setMovingAvarage(result);
    setTotalDeaths(deaths);
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
        <View style={styles.space}>
          <Text style={styles.titleData}>Dados utilizados para o cálculo</Text>
          <Text>
            O período considerado para o cálculo foi entre 01/01/2021 à
            01/06/2021
          </Text>
          <View>
            <Text>
              <Text style={styles.bold}>Total de mortes no período:</Text>{' '}
              {totalDeaths}
            </Text>
            <Text>
              <Text style={styles.bold}>Média móvel:</Text>{' '}
              {movingAvarage ? (
                <>
                  <Text>
                    {Math.trunc(movingAvarage)} (duas últimas semanas do
                    período)
                  </Text>
                </>
              ) : (
                ''
              )}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.calcButton}
          onPress={() => calcMovingAvarage()}>
          <Text style={styles.buttonText}>Exibir dados</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
