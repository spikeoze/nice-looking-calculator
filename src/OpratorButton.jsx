import React from 'react'
import {Button} from '@mantine/core';

function OperatorButton({operator, dispatch}) {
  return (
    <Button style={{width:57}} onClick={()=>dispatch({type:"CHOOSE-OPERATOR", payload:{operator}})}>{operator}</Button>
  )
}

export default OperatorButton