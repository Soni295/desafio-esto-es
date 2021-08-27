import { Box } from "@chakra-ui/react"

export const RowProject = ({children, ...rest}) => (
  <Box
    w='100%'
    h='75px'
    display='grid'
    gridTemplateColumns='2fr 2fr 2fr 1fr 1fr'
    alignItems='center'
    paddingLeft='25px'
      borderBottom='1px solid #9d9d9d'
    {...rest}
  >
    {children}
  </Box>
)
