import { Box } from "@chakra-ui/react"

export const HorizontalBar = ({children, ...rest}) => {
  return (
    <Box
      w='100%'
      h={[
        '2.4375rem', //39
        null,
        null,
        '3.625rem' //58
      ]}
      bg='white'
      paddingX={[
        '17px',
        null,
        null,
        '59px'
      ]}
      borderBottom='1px solid #9d9d9d'
      display='grid'
      alignItems='center'
      {...rest}
    >
      {children}
    </Box>
  )
}
