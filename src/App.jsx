/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './App.css'
import Header from './header/Header'
import Catagory from './catagory/Catagory'
import HomeCard from './Components/Card/HomeCard'
import Cart from './Components/Cart/Cart'
import SignIn from './SignIn'
import ErrorPage from './ErrorPage'
import SideBar from './sideBar/SideBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useAllStates } from './AllStates'

// Main App component
function App () {
  const {
    setSidebarOpen,
    isSidebarOpen
  } = useAllStates()

  // Defining the routes
  const allroutes = [
    {
      path: '/',
      element: <HomeCard  />,
      errorElement: <ErrorPage />
    },
    { path: '/signin', element: <SignIn />, errorElement: <ErrorPage /> },
    { path: '*', element: <ErrorPage />, errorElement: <ErrorPage /> } // Catch-all for 404
  ]

  const Layout = ({ children }) => {
    return (
      <>
        <Header/>
        <Catagory openSidebar={() => setSidebarOpen(true)} />
        <Cart/>
        {children}
        <SideBar openSidebar={isSidebarOpen} onCloseSidebar={() => setSidebarOpen(false)} />
      </>
    );
  }

  return (
    <Router>
      <Routes>
        {allroutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.path==="/" || route.path==="/signin"  ?<Layout>{route.element}</Layout>:route.element} // Wrapping route elements with Layout
          />
        ))}
      </Routes>
    </Router>
  )
}

export default App;
