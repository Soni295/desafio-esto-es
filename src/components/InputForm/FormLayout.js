import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react"

export const FormLayout = ({label, name, formik, children}) => (
  <FormControl
    minH='120px'
    isInvalid={formik.errors[name] && formik.touched[name]}
  >
    <FormLabel
      htmlFor={name}
      fontSize='18px'
    >
      {label}
    </FormLabel>
    {children}
    <FormErrorMessage>
      {formik.errors[name]}
    </FormErrorMessage>
  </FormControl>
)
