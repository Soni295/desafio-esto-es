import { Box } from "@chakra-ui/react"

export const HorizontalBar = ({children, ...rest}) => {
  return (
    <Box
      w='100%'
      h='39px'
      display='grid'
      alignItems='center'
      borderBottom='1px solid #9d9d9d'
      {...rest}
    >
      {children}
    </Box>
  )
}
