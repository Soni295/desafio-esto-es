import { Box, Text, VStack } from "@chakra-ui/react"
import { RowProject } from "./RowProject"
import { UserAvatar } from "../UserAvatar"


const Circule = () => (
  <Box
    borderRadius='full'
    m='0'
    h='7px'
    w='7px'
    bg='black'
  />
)

export const ProjectItem = ({title, creationDate, projectManager, assignedTo, status}) => {
  return(
    <RowProject
     >
      <Box>
        <Text
          fontSize='18px'
        >
          {title}
        </Text>
        <Text
          color='blackAlpha.500'
        >
          Creation date: {creationDate}
        </Text>
      </Box>
      <UserAvatar
        name={projectManager.name}
        src={projectManager.icon}
      />
      <UserAvatar
        name={assignedTo.name}
        src={assignedTo.icon}
      />
      <Box>
        {status}
      </Box>
      <VStack alignItems='start'>
        <Circule/>
        <Circule/>
        <Circule/>
      </VStack>
    </RowProject>
  )
}
