import type { NextPage } from 'next'
import {useEffect, useState} from 'react'

const StiqrMsg = (props: any) => {
    const {stiqrId: string} = props
    const [stiqrMessage, setStiqrId] = useState("");
    const [isError, setError] = useState("")

    useEffect(() => {
        // mimicing a call to the backend to get board message
        if(Math.random() > .5){
            setStiqrId("You are having a great day right!!!")
        } else {
            setError("Sorry we did not find this Stiqr")
        }
    }, [])


  return (
    <div className="flex min-h-full flex-col items-center justify-center">
        {
          isError.length ? 
          <div>{isError}</div> :
          <div>{stiqrMessage}: {props?.stiqrId}</div>  
        }
    </div>
  )
}

export default StiqrMsg
