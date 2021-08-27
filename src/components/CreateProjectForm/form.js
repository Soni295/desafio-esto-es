import * as Yup from 'yup';

export const initialValues = {
  projectName: '',
  description: '',
  projectManager: '',
  assignedTo: '',
  status: ''
}

export const validationSchema = Yup.object({
  projectName: Yup
    .string()
    .min(5, 'The project name must have a minimum of 5 characters')
    .max(30, 'The description must have a max of 30 characters')
    .required('The project name is require'),
  description: Yup
    .string()
    .min(5, 'The description must have a minimum of 5 characters')
    .max(30, 'The description must have a max of 30 characters')
    .required('The description is require'),
  projectManager: Yup
    .string()
    .required('You must to select a Project Manager'),
  assignedTo: Yup
    .string()
    .required('You must to select a Assigned'),
  status: Yup
    .string()
    .required('You must to select a status'),
})

export const onSubmit = (values) => {
  console.log(values)
}
