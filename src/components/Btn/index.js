import { Button } from "@chakra-ui/react"

export const RedBtn = ({children, ...rest}) => {
  return (
    <Button
      bg='red.600'
      color='white'
      colorScheme='red'
      justifySelf='end'
      fontWeight='100'
      fontSize={[
        '16px',
        '18px',
        '20px',
        '21px'
      ]}
      w={[
        '145px',
        '150px',
        '165px',
        '175px'
      ]}
      h={[
        '45px',
        '50px',
        '55px',
        '58px'
      ]}
      {...rest}
    >
      {children}
    </Button>
  )
}
