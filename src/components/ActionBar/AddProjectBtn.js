import { RedBtn } from "../Btn/index"
import { Link } from "react-router-dom"

import { PATHS } from "../../config/PATHS"

export const AddProjectBtn = () => {
  return (
    <RedBtn
      as={Link}
      to={PATHS.CREATEPROJECT}
    >
     + Add Project
    </RedBtn>
  )
}
