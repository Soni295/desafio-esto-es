import './App.css';
import { Navbar } from './components/NavBar';
import { ActionBar } from './components/ActionBar';
import { Box } from "@chakra-ui/react"

const App = () => {
  return (
    <Box
      w='100vw'
      h='100vh'
      bg='blackAlpha.200'
    >
      <Navbar/>
      <ActionBar />
    </Box>
  )
}

export default App;
