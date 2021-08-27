import { Box } from "@chakra-ui/react"


export const FormBox = ({children}) => {
  return(
    <Box
      h='500px'
      w='880px'
      bg='white'
      boxShadow='md'
      margin='auto'
      mt='35px'
      borderRadius='5px'
    >
      {children}
    </Box>
  )
}

export const CreateProject = () => {
  return (
    <FormBox>
    </FormBox>
  )
}
