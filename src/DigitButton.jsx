import React from 'react'
import {Button} from '@mantine/core';

function DigitButton({digit, dispatch}) {
  return (
    <Button variant="light" style={{width:57}} onClick={()=> dispatch({type:"ADD-DIGIT", payload:{digit}})} >{digit}</Button>
  )
}

export default DigitButton