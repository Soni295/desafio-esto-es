import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box } from "@chakra-ui/react"

import { PATHS } from './config/PATHS';
import { Navbar } from './components/NavBar';

import { Home } from './pages/Home';
import { CreateProject } from './pages/CreateProject';
import { EditProject } from './pages/EditProject';
import './App.css';

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
          <Route exact path={PATHS.EDITPROJECT} component={EditProject} />
        </Switch>
      </Box>
    </Router>
  )
}

export default App;
