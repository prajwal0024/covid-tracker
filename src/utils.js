export const extractCountriesList = (allData, countriesData) => {
  const countryArray = countriesData.map(current => (
    {
      name: current.country,
      number: current.cases,
      value: current.countryInfo.iso2
    }
  ))

  const allObj = {
    name: "hello",
    number: 999999999,
    value: "worldwide"
  }
  return [allObj, allObj];
}