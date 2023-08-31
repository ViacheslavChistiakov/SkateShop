import React from 'react';
import arrow1 from  '../assets/arrow1.png';

function Sort () {
    return (
        <div className="sort">
        <label htmlFor="" className="sort_sort">
            <h1 className="sort_title">Sort</h1>
              <button className="sort_choose">
                  <img src={arrow1} alt="arrow" className="sort_img" />
              </button>
        </label>
    </div>
    )
}

export default Sort;