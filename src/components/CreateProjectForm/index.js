import { FormBox } from "../FormBox"
import { useFormik } from 'formik';
import { InputForm } from '../InputForm';
import { initialValues, validationSchema, onSubmit } from './form';

export const CreateProjectForm = () => {
  const formik = useFormik({initialValues, validationSchema, onSubmit})

  return (
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
    </FormBox>
  )
}
