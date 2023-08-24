import React, { useState } from "react"







function Categories () {

const [divClass, setClass] = useState<number | null>(null);

const buttons =[
  {id: 1, className: divClass === 1 ? 'choose' : 'top'},
  {id: 2, className: divClass === 2 ? 'choose' : 'new'},
  {id: 3, className: divClass === 3 ? 'choose' : 'buy'},
]

const titles =[
  {id: 1, className: divClass === 1 ? 'choose_title' : 'top_title'},
  {id: 2, className: divClass === 2 ? 'choose_title' : 'new_title'},
  {id: 3, className: divClass === 3 ? 'choose_title' : 'buy_title'},
]

function changeHundler (id: number) {
  setClass(id);

}
    return (

<div className="categories">
{buttons.map((button) => (
  <button key={button.id} onClick={() => changeHundler(button.id)} className={button.className}>
  <h2 className={titles.find((t) => t.id === button.id)?.className}>
    {button.id === 1 && 'Top of week'}
    {button.id === 2 && 'New'}
    {button.id === 3 && 'Buying right Now'}
  </h2>
  </button>
))}
</div>
    )
}

export default Categories; 

