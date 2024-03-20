import React, { useState } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import UserProvider from './contexts/UserContext'
import Sidebar from './components/Sidebar'
import PageHeader from './components/PageHeader'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import LogOut from './pages/LogOut'
import UserProfile from './pages/UserProfile'
import CreateAccount from './pages/CreateAccount'
import Dashboard from './pages/Dashboard'
import Accounts from './pages/Accounts'
import Transactions from './pages/Transactions'
import Expenses from './pages/Expenses'
import Plan from './pages/Plan'
import Goals from './pages/Goals'
import Investments from './pages/Investments'
import Advice from './pages/Advice'
import './App.css'
import './styles/global.css'
import './styles/fonts.css'
import './styles/sidebar.css'

function App() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true)
  const [pageTitle, setPageTitle] = useState('Dashboard')
  const location = useLocation()
  const navigate = useNavigate()

  //Function to toggle sidebar width
  const toggleSidebarWidth = () => {
    setIsSidebarExpanded(!isSidebarExpanded)
  }

  // Function to handle page title based on the link clicked
  const handlePageTitle = (title) => {
    setPageTitle(title)
  }

  // Function to set page margin based on the current width of the sidebar
  const getContentMargin = () => {
    return isSidebarExpanded ? '320px' : '160px'
  }

  const handleLogoClick = () => {
    navigate('/')
  }
  // Conditionally render the sidebar based on the current page
  const renderSidebar = !['/login', '/', '/getstarted'].includes(location.pathname)
  const renderPageHeader = [
    '/dashboard',
    '/accounts',
    '/transactions',
    '/expenses',
    '/plan',
    '/goals',
    '/investments',
    '/advice',
    '/profile',
  ].includes(location.pathname)

  return (
    <UserProvider>
      {renderSidebar && (
        <Sidebar
          isExpanded={isSidebarExpanded}
          toggleSidebarWidth={toggleSidebarWidth}
          handlePageTitle={handlePageTitle}
        />
      )}
      <div
        className='content-container'
        style={{
          marginLeft: renderSidebar ? getContentMargin() : '0',
          transition: 'margin-left 0.3s ease',
        }}
      >
        {renderPageHeader && (
          <PageHeader sidebarWidth={isSidebarExpanded ? 300 : 140} pageTitle={pageTitle} />
        )}
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/getstarted' element={<CreateAccount handleLogoClick={handleLogoClick} />} />
          <Route path='/profile' element={<UserProfile />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/accounts' element={<Accounts />} />
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/expenses' element={<Expenses />} />
          <Route path='/plan' element={<Plan />} />
          <Route path='/goals' element={<Goals />} />
          <Route path='/investments' element={<Investments />} />
          <Route path='/advice' element={<Advice />} />
          <Route path='/logout' element={<LogOut />} />
        </Routes>
      </div>
    </UserProvider>
  )
}

export default App
