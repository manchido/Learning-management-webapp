import React from 'react'

import { Spin } from 'antd'

import styled from 'styled-components'
//Spinner
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Spinner = (props) => {
  return (
    <Center>
      <Spin {...props} />
    </Center>
  )
}

export default Spinner
