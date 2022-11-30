import type { NextPage } from 'next'
import {useEffect, useState} from 'react'
import { useRouter } from 'next/router';
import StiqrMsg from './StiqrMsg'

const Stiqr: NextPage = (props) => {
    const stiqrId = useRouter().query?.stiqrId;

  return (
    <div className="flex min-h-full flex-col items-center justify-center">
      {
      stiqrId ? 
      <StiqrMsg stiqrId={stiqrId} /> : 
      <div>"Sorry"</div>
      
      }
    </div>
  )
}

export default Stiqr
