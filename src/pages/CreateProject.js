import { CreateProjectForm } from "../components/CreateProjectForm"
import { HorizontalBar } from "../components/HorizontalBar"
import { Link } from "react-router-dom"
import { PATHS } from "../config/PATHS"
import { Text } from "@chakra-ui/react"
import { HStack } from "@chakra-ui/react"
import { ArrowBackIcon } from '@chakra-ui/icons'

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


export const CreateProject = () => {
  return (
    <>
      <ActionBarBack section='Add project'/>
      <CreateProjectForm/>
    </>
  )
}
