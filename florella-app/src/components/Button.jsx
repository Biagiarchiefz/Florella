import {Link} from "react-router"
import React, { Children } from 'react'

const Button = (props) => {
  const {children, to, w} = props;
  return (
    <>
      <Link to={to} className={`text-[#f5f5f5] py-3 px-6 bg-[#1B1B1B] text-center ${ w || "w-full"} mt-3`}>
     {children}
     </Link>
    </>
  )
}

export default Button
