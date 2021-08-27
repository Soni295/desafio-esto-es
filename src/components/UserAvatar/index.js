import { Text, Avatar, Wrap, WrapItem } from "@chakra-ui/react"

export const UserAvatar = ({name, src, ...rest}) => (
  <Wrap {...rest}>
    <WrapItem>
      <Avatar
        size="sm"
        name={name}
        src={src}
      />
    </WrapItem>
    <WrapItem>
      <Text
        ml='3px'
        alignSelf='center'
        fontSize='18px'
      >
        {name}
      </Text>
    </WrapItem>
  </Wrap>
)
