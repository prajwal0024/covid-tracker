{/* --First Row */ }
<div className="simpleRow">
  {/* ------Cases */}
  <Stats
    heading="Cases"
    number={prettyPrintStat(selectedCountryData.cases) || "--"}
    bottomLine={
      selectedCountryData.todayCases
        ? `+${selectedCountryData.todayCases} cases today`
        : "-- cases today"
    }
  />
  {/* ------Recovered */}
  <Stats
    heading="Recovered"
    number={prettyPrintStat(selectedCountryData.recovered) || "--"}
    bottomLine={
      selectedCountryData.todayCases
        ? `+${selectedCountryData.todayRecovered} cases today`
        : "-- cases today"
    }
  />
  {/* ------Deaths */}
  <Stats
    heading="Deaths"
    number={prettyPrintStat(selectedCountryData.deaths) || "--"}
    bottomLine={
      selectedCountryData.todayCases
        ? `+${selectedCountryData.todayDeaths} cases today`
        : "-- cases today"
    }
  />
</div>

{/* --Second Row */ }
<div className="bigRow">
  <Stats
    heading="Active"
    number={prettyPrintStat(selectedCountryData.active) || "--"}
    progressBar={selectedCountryData.activePercentage}
  />
  {/* ------Critical */}
  <Stats
    heading="Critical"
    number={prettyPrintStat(selectedCountryData.critical) || "--"}
    progressBar={selectedCountryData.criticalPercentage}
  />
</div>

{/* --Third Row */ }
<div className="bigRow">
  {/* ------Population */}
  <Stats
    heading="Population"
    number={prettyPrintStat(selectedCountryData.population) || "--"}
    bottomLine="*approximate estimation"
  />
  {/* ------Tests */}
  <Stats
    heading="Tests"
    number={prettyPrintStat(selectedCountryData.tests) || "--"}
    progressBar={selectedCountryData.testsPercentage}
  />
</div>

{/* --Forth Row */ }
<div className="dropDown" onClick={dropDownClicked}>
  {/* ------Drop Down */}
  <h2 className="dropDown__heading">
    Stats per <span>{numberType[dropDownIndex]}👇</span>
  </h2>
</div>

{/* --Fifth Row */ }
<div className="simpleRow">
  {/* ------Cases */}
  <Stats
    heading="Cases"
    number={prettyPrintStat(Math.floor(selectedCountryData.casesPerOneMillion * dropDownIndex)) || 0}
    bottomLine={`*per ${numberType[dropDownIndex]}`}
  />
  {/* ------Deaths */}
  <Stats
    heading="Recovered"
    number={prettyPrintStat(Math.floor(selectedCountryData.recoveredPerOneMillion * dropDownIndex)) || 0}
    bottomLine={`*per ${numberType[dropDownIndex]}`}
  />
  {/* ------Recovered */}
  <Stats
    heading="Deaths"
    number={prettyPrintStat(Math.floor(selectedCountryData.deathsPerOneMillion * dropDownIndex)) || 0}
    bottomLine={`*per ${numberType[dropDownIndex]}`}
  />
</div>

{/* --Sixth Row */ }
      <div className="bigRow">
        {/* ------Active */}
        <Stats
          heading="Active"
          number={prettyPrintStat(Math.floor(selectedCountryData.activePerOneMillion * dropDownIndex)) || 0}
          progressBar={selectedCountryData.activePerOneMillionPercentage}
        />
        {/* ------Critical */}
        <Stats
          heading="Critical"
          number={prettyPrintStat(Math.floor(selectedCountryData.criticalPerOneMillion * dropDownIndex)) || 0}
          progressBar={selectedCountryData.criticalPerOneMillionPercentage}
        />
      </div>

      <div className="footNote" style={{ marginBottom: "8.8rem" }}>
        <p className="footNote__text">
      Data Powered<br />
              by <a href="https://disease.sh/" target="_blank">disease.sh👍</a>
        </p>
      </div>