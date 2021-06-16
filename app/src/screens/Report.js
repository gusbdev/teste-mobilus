import React, {useEffect, useState} from 'react';
import {
  Alert,
  PermissionsAndroid,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import {styles} from '../Styles';
import {allCases, reportGenerate} from '../services/cases';

export default function Report() {
  const [lastMonth, setLastMonth] = useState([]);
  const [result, setResult] = useState('');
  const [numCases, setNumCases] = useState('1221');
  const [numDeaths, setNumDeaths] = useState('234');
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [watchID, setWatchID] = useState(0);

  function callAllCases() {
    allCases()
      .then(response => {
        if (response !== undefined) {
          setLastMonth(
            response.data.slice(
              response.data.length - 32,
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

  const callLocation = () => {
    const requestLocationPermission = async () => {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permissão de acesso à Localização',
          message: 'Este aplicativo precisa da sua localização',
          buttonNeutral: 'Pergunte-me depois',
          buttonNegative: 'Cancelar',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getLocation();
      } else {
        Alert.alert('Permissão de Localização negada.');
      }
    };
    requestLocationPermission();
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const currentLat = JSON.stringify(position.coords.latitude);
        const currentLong = JSON.stringify(position.coords.longitude);
        setLat(currentLat);
        setLong(currentLong);
      },
      error => Alert.alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
    setWatchID(watchID);
  };

  function callPostReport() {
    reportGenerate(numCases, numDeaths, lat, long).then(response => {
      Alert.alert(response.data.response);
      setResult(response.data.response);
    });
  }

  useEffect(() => {
    callAllCases();

    callLocation();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  return (
    <>
      <View style={styles.containerTitle}>
        <Text style={styles.mainTitle}>Relatório</Text>
      </View>
      <View style={styles.container}>
        <Text>{result}</Text>
        <TouchableOpacity
          style={styles.calcButton}
          onPress={() => callPostReport()}>
          <Text style={styles.buttonText}>Gerar relatório</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
