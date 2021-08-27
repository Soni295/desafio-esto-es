import { Box, Button } from "@chakra-ui/react"

export const Pagination = ({projectsPerPage, totalProjects, paginate,
  currentPage}) => {
  const pageNumber = []

  for(let i = 1; i <= Math.ceil(totalProjects.length/projectsPerPage); i++){
    pageNumber.push(i)
  }

  return(
    <Box
      w='100%'
      h='300px'
      display='grid'
      justifyItems='center'
      pt='50px'
    >
    <Box
    >
      {pageNumber.map(page =>
        <Button
          m='auto'
          colorScheme={currentPage === page ? 'blue': 'gray'}
          onClick={()=> paginate(page)}
          key={'pag' + page}
        >
          {page}
        </Button>
      )}
    </Box>
    </Box>
  )
}
