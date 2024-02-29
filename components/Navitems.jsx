"use client"

import { useState } from 'react'

const Navitems = (props) => {

    const [open, setOpen] = useState(false)
  return (
    <li className="nav-item">
        {/* {props.text} */}
        <p className="icon-button cursor-pointer" onClick={() => setOpen(!open)}>
            {props.icon}
        </p>

        {open && props.children }
    </li>
  )
}

export default Navitems