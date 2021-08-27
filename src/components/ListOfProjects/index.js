import { Box } from "@chakra-ui/react"
import { HeadOfList } from "./HeadOfList"
import { ProjectItem } from "./ProjectItem"
import { useSelector } from 'react-redux';

export const ListOfProjects = () => {
  const  projects  = useSelector(state => state.projects.data)
  return(
    <Box
      marginX={[
        '0',
        '10px',
        '20px',
        '48px'
      ]}
      borderRadius={[
        '0',
        '5px',
        '5px',
        '5px',
      ]}
      mt={[
        '20px',
        '20px',
        '25px',
        '32px',
      ]}
      bg='white'
      boxShadow='md'
    >
      <HeadOfList />
      {projects.map(project =>
        <ProjectItem  {...project} key={project.title + project.id}/>
      )}
    </Box>
  )
}
