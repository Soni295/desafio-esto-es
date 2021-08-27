import { CreateProjectForm } from "../components/CreateProjectForm"
import { ActionBarBack } from "../components/ActionBarBack"

export const CreateProject = () => {
  return (
    <>
      <ActionBarBack section='Add project'/>
      <CreateProjectForm/>
    </>
  )
}
