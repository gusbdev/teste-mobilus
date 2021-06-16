import api from './api';

const url = '/cases';

async function allCases() {
  try {
    const response = await api
      .get(url)
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

export {allCases};
