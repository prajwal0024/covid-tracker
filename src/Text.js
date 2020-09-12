//DataContext.js
export const DataContext = createContext();
export const DataProvider = props => {

  const [apiCountriesData, setApiCountriesData] = useState([])
  const [apiAllData, setApiAllData] = useState([])

  return (
    <DataContext.Provider
      value={[
        apiCountriesData, setApiCountriesData,
        apiAllData, setApiAllData
      ]}>
      {props.children}
    </DataContext.Provider>
  )
}

//APP.js
useEffect(() => {
  Promise.all([
    fetch("https://disease.sh/v3/covid-19/all").then(response => response.json()),
    fetch("https://disease.sh/v3/covid-19/countries").then(response => response.json())
  ]).then(([resOne, resTwo]) => {
    setApiAllData(resOne)
    setApiCountriesData(resTwo)
  })
}, [])