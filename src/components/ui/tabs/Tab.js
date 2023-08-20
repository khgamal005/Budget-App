import { useState } from "react"
import Button from "../button/Button"

const Tab = ({ children,title }) => {
  const [toggle, settoggle] = useState(false)


  return(
    <>
    <div className="tabs" onClick={()=>(settoggle(prev=>!prev))}>
      <Button   >{title}</Button>
      {toggle?( 

            <div className="tabs_titles">
              {children}
            </div>
      ) :''}
    </div>
    </>
  )

}

export default Tab