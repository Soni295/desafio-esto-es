import { useFormik } from 'formik';

import { initialValues, validationSchema, onSubmit } from './form';

import { FormBox } from "../FormBox"
import { InputForm, Select } from '../InputForm';
import { RedBtn } from '../Btn/index';

export const CreateProjectForm = () => {
  const formik = useFormik({initialValues, validationSchema, onSubmit})

  const manager = [
    'Walt Cosani',
    'Joe Doe',
    'Alexandra Smith'
  ]
  const assistant = [
    'Ignacio Truffa',
    'John Connor',
    'Steven Tylor'
  ]
  const status = [
    'Enabled',
    'Disabled',
  ]

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormBox>
        <InputForm
          label='Project name'
          name='projectName'
          formik={formik}
        />
        <InputForm
          label='Description'
          name='description'
          formik={formik}
        />
        <Select
          label='Project Manager'
          options={manager}
          formik={formik}
          placeholder="Select a Person"
          name='projectManager'
        />
        <Select
          label='Assigned To'
          options={assistant}
          formik={formik}
          name='assignedTo'
          placeholder="Select a Person"
        />

        <Select
          label='Status'
          options={status}
          formik={formik}
          placeholder="Select status"
          name='status'
        />
        <RedBtn
          type='submit'
        >
          Create project
        </RedBtn>
      </FormBox>
    </form>
  )
}
