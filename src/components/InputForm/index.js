import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"

export const InputForm = ({label, name, formik}) => (
  <FormControl isInvalid={formik.errors[name] && formik.touched[name]}>
    <FormLabel htmlFor={name}>{label}</FormLabel>
    <Input
      id={name}
      type="text"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[name]}
    />
    <FormErrorMessage>{formik.errors[name]}</FormErrorMessage>
  </FormControl>
)
