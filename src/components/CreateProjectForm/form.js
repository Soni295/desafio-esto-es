import * as Yup from 'yup';

export const initialValues = {
  projectName: '',
  description: '',
  projectManager: 'Select a person',
  AssignedTo: 'Select a person',
  Status: 'Enabled'
}

export const validationSchema = Yup.object({
  projectName: Yup
    .string()
    .min('The project name must have a minimum of 5 characters')
    .required('The project name is require'),
  description: Yup
    .string()
    .min('The description must have a minimum of 5 characters')
    .required('The description is require'),
  projectManager: Yup
    .string()
    .required('You must to select a Project Manager'),
  AssignedTo: Yup
    .string()
    .required('You must to select a Assigned'),
})

export const onSubmit = (values) => {
  console.log(values)
}
