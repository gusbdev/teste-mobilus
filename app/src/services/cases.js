import api from './api';

const urlGet = '/cases';
const urlPost = '/report';

async function allCases() {
  try {
    const response = await api
      .get(urlGet)
      .then(resp => {
        return resp;
      })
      .catch(error => {
        return error;
      });
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function reportGenerate(numCases, numDeaths, lat, long) {
  try {
    const response = await api
      .post(urlPost, {numCases, numDeaths, lat, long})
      .then(resp => {
        return resp;
      })
      .catch(error => {
        return error;
      });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export {allCases, reportGenerate};
