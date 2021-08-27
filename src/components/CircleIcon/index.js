import { Box } from "@chakra-ui/react"

export const CircleIcon = ({...rest}) => (
  <Box
    borderRadius='full'
    m='0'
    h='7px'
    w='7px'
    bg='black'
    {...rest}
  />
)
