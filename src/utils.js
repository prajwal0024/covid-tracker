// export const sortCountries = (data) => {
//   let sortedData = data;
//   sortedData.sort((a, b) => {
//     if (a.cases > b.cases) {
//       return -1;
//     }
//     else {
//       return 1;
//     }
//   })
//   return sortedData;
// }

export const sortCountries = data => data.sort((a, b) => a.cases < b.cases);