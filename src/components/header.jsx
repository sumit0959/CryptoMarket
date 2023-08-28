import { Button,HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <HStack p={"5"} shadow={"base"} bgColor={"blackAlpha.900"}>
      <Button variant={"unstyled"} color={"white"} padding={"3.5"}>
        <Link to="/">HOME</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} padding={"3.5"}>
        <Link to="/exchanges">EXCHANGES</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} padding={"3.5"}>
        <Link to="/coins">COINS</Link>
      </Button>
    </HStack>
  )
}

export default Header