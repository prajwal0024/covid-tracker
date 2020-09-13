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
import numeral from 'numeral'

export const sortCountries = data => data.sort((a, b) => a.cases < b.cases);

export const calculatePercentage = (number, totalNumber) => {
  return Math.ceil((number / totalNumber) * 100);
}

export const prettyPrintStat = stat => stat ? `${numeral(stat).format("0.[0]a")}` : "--";
