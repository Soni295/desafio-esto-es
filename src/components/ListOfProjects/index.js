import { Box } from "@chakra-ui/react"
import { HeadOfList } from "./HeadOfList"
import { ProjectItem } from "./ProjectItem"

const data = [
  {
    title: 'Landing page',
    creationDate : '09/09/2020 10:30am',
    projectManager: {
      name: 'Walt Cosani',
      icon: null
    },
    assignedTo: {
      name: 'Ignacio Truffa',
      icon: null
    },
    status: 'Enable'
  }
]



export const ListOfProjects = () => {
  return(
    <Box
      marginX='48px'
      borderRadius='5px'
      h='300px'
      mt='32px'
      bg='white'
    >
      <HeadOfList />
      {data.map(project =>
        <ProjectItem  {...project}/>
      )

      }
    </Box>
  )
}
