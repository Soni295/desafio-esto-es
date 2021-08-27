import { Input } from "@chakra-ui/react"
import { Select as SelectCK } from "@chakra-ui/react"
import { FormLayout } from "./FormLayout"

export const InputForm = ({label, name, formik}) => (
  <FormLayout
    label={label}
    name={name}
    formik={formik}
  >
    <Input
      id={name}
      h='50px'
      fontSize='20px'
      type="text"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[name]}
    />
  </FormLayout>
)

export const Select = ({options=[], name, label, formik, placeholder}) => {
  return(
    <FormLayout
      label={label}
      name={name}
      formik={formik}
    >
      <SelectCK
        placeholder={placeholder}
        id={name}
        h='50px'
        fontSize='20px'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
      >
        {options.map(op =>
          <option
            key={op}
            value={op}
          >
            {op}
          </option>
        )}
      </SelectCK>
    </FormLayout>
  )
}

