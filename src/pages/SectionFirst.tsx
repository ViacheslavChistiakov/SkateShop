import first from '../assets/firstpic.png';
import second from '../assets/secondpic.png';
import third from '../assets/thirdpic.png';
import four from '../assets/fourpic.png';
import last from '../assets/lastpic.png';
import React from 'react';

function SectionFirst() {
    return (
        <div className="section_picture">
        <div className="first_picture">
          <img src={first} alt="" />
        </div>
        <div className="second_picture">
          <img src={second} alt="" />
        </div>
        <div className="third_pictire">
          <img src={third} alt="" />
        </div>
        <div className="four_picture">
          <img className='four_inner' src={four} alt="" />
        </div>
        <div className="last_picture">
          <img className='last_inner' src={last} alt="" />
        </div>
      </div>
    )
}

export default SectionFirst;