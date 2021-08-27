import { Text } from "@chakra-ui/react"
import { RowProject } from "./RowProject"

const Title = ({text}) => (
  <Text
    fontSize='18px'
    fontWeight='600'
  >
    {text}
  </Text>
)

export const HeadOfList = () => {
  const titles = [
    'Project info',
    'Project Manager',
    'Assigned to',
    'Status',
    'Action'
  ]

  return (
    <RowProject
      display={['none', 'none', 'grid', 'grid']}
    >
      {titles.map(title =>
        <Title text={title} key={title}/>
      )}
    </RowProject>
  )
}
