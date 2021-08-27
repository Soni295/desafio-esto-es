import './App.css';
import { Navbar } from './components/NavBar';
import { ActionBar } from './components/ActionBar';
import { ListOfProjects } from './components/ListOfProjects';
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
      <ListOfProjects />
    </Box>
  )
}

export default App;
