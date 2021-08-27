import { Box, Text } from "@chakra-ui/react"
import { RowProject } from "./RowProject"
import { UserAvatar } from "../UserAvatar"
import { MenuActions } from "./MenuActions"

export const ProjectItem =
  ({title, creationDate, projectManager, assignedTo, status}) => {
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
      <MenuActions />
    </RowProject>
  )
}
