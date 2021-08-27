import { FormBox } from "../components/FormBox"
import { useFormik } from 'formik';

import * as Yup from 'yup';

const initialValues = {
  projectName: '',
  description: '',
  projectManager: 'Select a person',
  AssignedTo: 'Select a person',
  Status: 'Enabled'
}

const validationSchema = Yup.object({
  projectName: Yup.string().required('The project name is require'),
  description: Yup.string().required('The description is require'),
  projectManager: Yup.string().required('Project Manager is require'),
  AssignedTo: Yup.string().required('The person is require'),
})

export const CreateProject = () => {

  const formik = useFormik()
  return (
    <FormBox>
    </FormBox>
  )
}
