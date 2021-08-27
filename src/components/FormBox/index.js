import { Box } from "@chakra-ui/react"

export const FormBox = ({children, ...rest}) => {
  return(
    <Box
      w='900px'
      padding='60px'
      bg='white'
      boxShadow='md'
      margin='auto'
      mt='35px'
      borderRadius='5px'
      {...rest}
    >
      {children}
    </Box>
  )
}
