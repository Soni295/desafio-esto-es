import { Button } from "@chakra-ui/react"

export const AddProjectBtn = () => {
  return (
    <Button
      colorScheme='red'
      justifySelf='end'
      fontWeight='100'
      h={[
        '2rem',     // 32px
        '2.125rem', // 34px
        '2.375rem', // 38px
        '2.5rem'    // 40px'
      ]}
    >
     + Add Project
    </Button>
  )
}
