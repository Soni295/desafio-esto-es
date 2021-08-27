import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box } from "@chakra-ui/react"

import { CreateProject } from './pages/CreateProject';
import { PATHS } from './config/PATHS';
import { Navbar } from './components/NavBar';
import { Home } from './pages/Home';

const App = () => {
  return (
    <Router>
      <Box
        w='100vw'
        h='100vh'
        bg='blackAlpha.200'
      >
        <Navbar/>
        <Switch>
          <Route exact path={PATHS.HOME} component={Home} />
          <Route exact path={PATHS.CREATEPROJECT} component={CreateProject} />
        </Switch>
      </Box>
    </Router>
  )
}

export default App;
