import { Text, HStack } from "@chakra-ui/react"
import { ArrowBackIcon } from '@chakra-ui/icons'

import { HorizontalBar } from "../HorizontalBar"
import { Link } from "react-router-dom"
import { PATHS } from "../../config/PATHS"

export const ActionBarBack = ({section}) => {
  return (
    <HorizontalBar>
      <HStack>
      <Text
        as={Link}
        to={PATHS.HOME}
      >
        <ArrowBackIcon /> Back
      </Text>
      <Text
        fontSize='30px'
        fontWeight='600'
        paddingLeft='30px'
      >
        {section}
      </Text>
      </HStack>
    </HorizontalBar>
  )
}
