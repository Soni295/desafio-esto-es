import { Box } from "@chakra-ui/react"
import { HeadOfList } from "./HeadOfList"
import { ProjectItem } from "./ProjectItem"
import { useSelector } from 'react-redux';

export const ListOfProjects = () => {
  const  projects  = useSelector(state => state.projects.data)
  return(
    <Box
      marginX='48px'
      borderRadius='5px'
      h='300px'
      mt='32px'
      bg='white'
    >
      <HeadOfList />
      {projects.map(project =>
        <ProjectItem  {...project} key={project.title}/>
      )}
    </Box>
  )
}
