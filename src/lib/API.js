const API_URL = 'http://localhost:3000/api/v1/beaches';
// const API_URL = 'http://hawaiibeachsafety.com/rest/ratings.json';

export default {
  // async getAll() {
  //   const response = await fetch(API_URL);
  //   return await response.json();
  // },
  async getAll() {
    const response = await fetch(API_URL);
    return await response.json();
  },
};
