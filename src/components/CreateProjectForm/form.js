import * as Yup from 'yup';
import { addProject } from '../../reducers/projectSlice'

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

export const onSubmit = dispatch => ({projectName, projectManager, status, assignedTo}) => {


  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }
  let now = new Intl.DateTimeFormat('es', options).format(new Date())

  const data = {
    projectName,
    status,
    projectManager: {
      name: projectManager,
      icon: null
    },
    assignedTo: {
      name: assignedTo,
      icon: null
    }
    , creationDate: now
  }
  dispatch(addProject(data))
}
