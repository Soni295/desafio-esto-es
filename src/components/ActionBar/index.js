import { Box, Text } from "@chakra-ui/react"
import { HorizontalBar } from "../HorizontalBar"
import { AddProjectBtn } from "./AddProjectBtn"

export const ActionBar = () => {
  return (
    <HorizontalBar>
      <Box
        display='grid'
        gridTemplateColumns='1fr 1fr'
      >
        <Text
          fontWeight= 'bold'
          fontSize='1.375rem'
          as='h2'
          justifySelf='start'
        >
          My projects
        </Text>
        <AddProjectBtn />
      </Box>
    </HorizontalBar>
  )
}
// 22px fontSize
