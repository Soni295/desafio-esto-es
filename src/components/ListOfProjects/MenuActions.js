import { useRef } from "react"

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  VStack,
  Text,
  Wrap,
  WrapItem
} from "@chakra-ui/react"

import { CircleIcon } from "../CircleIcon"
import { EditIcon } from '@chakra-ui/icons'


const ActionBtn = ({children, text}) => {
  return(
    <Wrap
      w='100%'
      borderBottomColor='blackAlpha.400'
      borderBottom='1px solid'
    >
      <WrapItem>
        {children}
      </WrapItem>

      <WrapItem>
        <Text>
          {text}
        </Text>
      </WrapItem>
    </Wrap>
  )
}

export const MenuActions = () => {
  const initialFocus = useRef()
  return (
    <Popover
      initialFocusRef={initialFocus}
      placement="bottom"
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <VStack alignItems='start'>
          <CircleIcon/>
          <CircleIcon/>
          <CircleIcon/>
        </VStack>
      </PopoverTrigger>

      <PopoverContent
        w='200px'
        bg="white"
        boxShadow='sm'
      >
        <PopoverArrow />
        <PopoverBody>
          <ActionBtn text='Edit'>
            <EditIcon />
          </ActionBtn>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
