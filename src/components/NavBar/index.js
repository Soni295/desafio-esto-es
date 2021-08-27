import { Image } from "@chakra-ui/react"

import { HorizontalBar } from "../HorizontalBar"

import logo from "../../assets/images/logo.png"

export const Navbar = () => {
  return (
    <HorizontalBar>
      <Image
        src={logo}
        h='50%'
      />
    </HorizontalBar>
  )
}
