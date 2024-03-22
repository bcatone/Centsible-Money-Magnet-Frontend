import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useUserContext } from '../contexts/UserContext'

const Sidebar = ({ isExpanded, toggleSidebarWidth, handlePageTitle }) => {
  const { user } = useUserContext()
    const handleLinkClick = (title) => {
      handlePageTitle(title)
    }

  // ! Uncomment when user login is functional
  // if (!user) {
  //   // If user is not authenticated, return null to hide the sidebar
  //   return null
  // }

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className='sidebar-header'>
        <div className='logo-container'>
          <div className='sidebar-logo'>
            {isExpanded ? (
              <img
                src='https://res.cloudinary.com/dovuffpii/image/upload/v1710297216/Money%20Magnet/money-magnet-logotype_j8r2wx.svg'
                alt='Money Magnet Logo'
                className='logo-img'
              />
            ) : (
              <img
                src='https://res.cloudinary.com/dovuffpii/image/upload/v1710297257/Money%20Magnet/mpney-magnet-icon_i1i3zt.svg'
                alt='Money Magnet Icon'
                className='logo-icon'
              />
            )}
          </div>
          <button
            className={`toggle-btn ${isExpanded ? 'expanded' : 'collapsed'}`}
            onClick={toggleSidebarWidth}
            onFocus={(e) => e.target.blur()} // Remove focus outline when button is focused
          >
            {isExpanded ? '《' : '》'}
          </button>
        </div>
      </div>
      <div className='sidebar-links'>
        <div className='sidebar-link'>
          <Link to='/dashboard' onClick={() => handleLinkClick('Dashboard')}>
            <img
              src='https://res.cloudinary.com/dovuffpii/image/upload/v1710303919/Money%20Magnet/dashboard_jfq9no.svg'
              alt='Dashboard'
              className='sidebar-icon'
            />
            {isExpanded && 'Dashboard'}
          </Link>
        </div>
        <div className='sidebar-link'>
          <Link to='/accounts' onClick={() => handleLinkClick('Accounts')}>
            <img
              src='https://res.cloudinary.com/dovuffpii/image/upload/v1710303917/Money%20Magnet/accounts_qq2hlh.svg'
              alt='Accounts'
              className='sidebar-icon'
            />
            {isExpanded && 'Accounts'}
          </Link>
        </div>
        <div className='sidebar-link'>
          <Link to='/transactions' onClick={() => handleLinkClick('Transactions')}>
            <img
              src='https://res.cloudinary.com/dovuffpii/image/upload/v1710303923/Money%20Magnet/transactions_exqoem.svg'
              alt='Transactions'
              className='sidebar-icon'
            />
            {isExpanded && 'Transactions'}
          </Link>
        </div>
        <div className='sidebar-link'>
          <Link to='/expenses' onClick={() => handleLinkClick('Expenses')}>
            <img
              src='https://res.cloudinary.com/dovuffpii/image/upload/v1710303920/Money%20Magnet/expenses_fyzrub.svg'
              alt='Expenses'
              className='sidebar-icon'
            />
            {isExpanded && 'Expenses'}
          </Link>
        </div>
        <div className='sidebar-link'>
          <Link to='/plan' onClick={() => handleLinkClick('Plan')}>
            <img
              src='https://res.cloudinary.com/dovuffpii/image/upload/v1710303922/Money%20Magnet/plan_yawabu.svg'
              alt='Plan'
              className='sidebar-icon'
            />
            {isExpanded && 'Plan'}
          </Link>
        </div>
        <div className='sidebar-link'>
          <Link to='/goals' onClick={() => handleLinkClick('Goals')}>
            <img
              src='https://res.cloudinary.com/dovuffpii/image/upload/v1710303921/Money%20Magnet/goals_mizy6b.svg'
              alt='Goals'
              className='sidebar-icon'
            />
            {isExpanded && 'Goals'}
          </Link>
        </div>
        <div className='sidebar-link'>
          <Link to='/investments' onClick={() => handleLinkClick('Investments')}>
            <img
              src='https://res.cloudinary.com/dovuffpii/image/upload/v1710303921/Money%20Magnet/investments_mmt6do.svg'
              alt='Investments'
              className='sidebar-icon'
            />
            {isExpanded && 'Investments'}
          </Link>
        </div>
        <div className='sidebar-link'>
          <Link to='/advice' onClick={() => handleLinkClick('Advice')}>
            <img
              src='https://res.cloudinary.com/dovuffpii/image/upload/v1710303918/Money%20Magnet/advice_eriooh.svg'
              alt='Advice'
              className='sidebar-icon'
            />
            {isExpanded && 'Advice'}
          </Link>
        </div>
      </div>
      <div className='user-profile'>
        {/* {user && ( */}
        <div className='sidebar-link profile-link'>
          <Link
            to='/profile'
            className='profile-text'
            onClick={() => handlePageTitle('Your Profile')}
          >
            <img
              src='https://res.cloudinary.com/dovuffpii/image/upload/v1710310110/Money%20Magnet/profile-img-placeholder_ljqrad.svg'
              alt='Profile'
              className='sidebar-icon profile-icon'
            />
            {/* <Link to='/profile' className='profile-text'>{user.name}</Link> */}
            {isExpanded && 'User Name'}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
