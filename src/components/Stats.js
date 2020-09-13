import React from 'react'
import './Stats.css'

function Stats({ heading, number, bottomLine, active, progressBar, onClick }) {

  const percent = progressBar ? progressBar + "%" : null;
  // window.document.getElementsByClassName("stats__completedProgressBar").style.width = "50%";
  return (
    <div className={`stats ${active === true && "stats__active"}`} onClick={onClick}>
      <h3 className="stats__heading">{heading}</h3>
      <hr className="stats__line" />
      <h4 className="stats__number">{number}</h4>
      {
        !progressBar
          ? <h4 className="stats__bottomLine">{bottomLine}</h4>
          : <div className="stats__progressBar">
            <div className="stats__completedProgressBar" style={{ width: percent }} />
          </div>
      }
    </div >
  )
}

export default Stats
