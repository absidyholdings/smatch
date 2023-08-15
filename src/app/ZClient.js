import axios from 'axios';

export const fetchToken = (email, password) => {
  // return new Promise((resolve) => {
  //   setTimeout(resolve.bind(null, "0308977f-42a3-45ed-920c-b5bf50d41601"), 2000);
  // });

  // move value to env var
  const url = 'https://us-central1-swarm-mvp.cloudfunctions.net/getToken';
  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    }
  };

  return axios.get(url, options)
      .then((response) => {
        return response.data.token;
      });
}
