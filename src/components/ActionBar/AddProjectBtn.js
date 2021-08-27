import { Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"

import { PATHS } from "../../config/PATHS"

export const AddProjectBtn = () => {
  return (
    <Button
      as={Link}
      colorScheme='red'
      justifySelf='end'
      fontWeight='100'
      to={PATHS.CREATEPROJECT}
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
