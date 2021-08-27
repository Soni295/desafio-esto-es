import { useState } from "react";
import { ActionBar } from '../components/ActionBar';
import { ListOfProjects } from '../components/ListOfProjects';
import { useSelector } from 'react-redux';
import { Pagination } from "../components/Pagination"


export const Home = () => {
  const projects  = useSelector(state => state.projects.data)
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 5
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject)

  const paginate = number => setCurrentPage(number)

  return(
    <>
      <ActionBar/>
      <ListOfProjects  projects={currentProjects}/>
      <Pagination
        projectsPerPage={projectsPerPage}
        totalProjects={projects}
        currentPage={currentPage}
        paginate={paginate}
      />
    </>
  )
}
