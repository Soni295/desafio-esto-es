import { Box, Text } from "@chakra-ui/react"
import { RowProject } from "./RowProject"
import { UserAvatar } from "../UserAvatar"
import { MenuActions } from "./MenuActions"

export const ProjectItem =
  ({projectName, creationDate, projectManager, assignedTo, status}) => {

  return(
    <RowProject
     >
      <Box>
        <Text
          fontSize='18px'
        >
          {projectName}
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
        display={[
          'none',
          'none',
          'block',
          'block'
        ]}
        name={assignedTo.name}
        src={assignedTo.icon}
      />
      <Box
        display={[
          'none',
          'none',
          'block',
          'block'
        ]}
      >
        {status}
      </Box>
      <MenuActions />
    </RowProject>
  )
}
