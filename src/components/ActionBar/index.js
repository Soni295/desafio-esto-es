import { Box, Text } from "@chakra-ui/react"
import { AddProjectBtn } from "./AddProjectBtn"
import { HorizontalBar } from "../HorizontalBar"

export const ActionBar = () => {
  return (
    <HorizontalBar>
      <Box
        display='grid'
        gridTemplateColumns='1fr 1fr'
      >
        <Text
          fontWeight= 'bold'
          as='h2'
          fontSize={[
            '20px',
            '22px',
            '26px',
            '28px'
          ]}
          alignSelf='center'
          justifySelf='start'
        >
          My projects
        </Text>
        <AddProjectBtn />
      </Box>
    </HorizontalBar>
  )
}
