import { Box } from "@chakra-ui/react"

export const HorizontalBar = ({children, ...rest}) => {
  return (
    <Box
      w='100%'
      h={[
        '60px',
        '68px',
        '75px',
        '82px'
      ]}
      bg='white'
      paddingX={[
        '20px',
        '30px',
        '45px',
        '59px'
      ]}
      borderBottom='1px solid'
      borderBottomColor='blackAlpha.400'
      display='grid'
      alignItems='center'
      {...rest}
    >
      {children}
    </Box>
  )
}
