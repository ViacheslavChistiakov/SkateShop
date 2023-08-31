import React from "react";
import arrow1 from  '../assets/arrow1.png';


function Filter () {
    return (
        <div className="filter">
            <h1 className="filter_title">Filters</h1>
              <button className="filter_choose">
                  <img src={arrow1} alt="arrow" className="fillter_img" />
              </button>
    </div>
    )
}

export default Filter;