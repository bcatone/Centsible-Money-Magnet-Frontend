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
          <img
            src='https://res.cloudinary.com/dovuffpii/image/upload/v1710303919/Money%20Magnet/dashboard_jfq9no.svg'
            alt='Dashboard'
            className='sidebar-icon'
          />
          {isExpanded && (
            <Link to='/dashboard' onClick={() => handleLinkClick('Dashboard')}>
              Dashboard
            </Link>
          )}
        </div>
        <div className='sidebar-link'>
          <img
            src='https://res.cloudinary.com/dovuffpii/image/upload/v1710303917/Money%20Magnet/accounts_qq2hlh.svg'
            alt='Accounts'
            className='sidebar-icon'
          />
          {isExpanded && (
            <Link to='/accounts' onClick={() => handleLinkClick('Accounts')}>
              Accounts
            </Link>
          )}
        </div>
        <div className='sidebar-link'>
          <img
            src='https://res.cloudinary.com/dovuffpii/image/upload/v1710303923/Money%20Magnet/transactions_exqoem.svg'
            alt='Transactions'
            className='sidebar-icon'
          />
          {isExpanded && (
            <Link to='/transactions' onClick={() => handleLinkClick('Transactions')}>
              Transactions
            </Link>
          )}
        </div>
        <div className='sidebar-link'>
          <img
            src='https://res.cloudinary.com/dovuffpii/image/upload/v1710303920/Money%20Magnet/expenses_fyzrub.svg'
            alt='Expenses'
            className='sidebar-icon'
          />
          {isExpanded && (
            <Link to='/expenses' onClick={() => handleLinkClick('Expenses')}>
              Expenses
            </Link>
          )}
        </div>
        <div className='sidebar-link'>
          <img
            src='https://res.cloudinary.com/dovuffpii/image/upload/v1710303922/Money%20Magnet/plan_yawabu.svg'
            alt='Plan'
            className='sidebar-icon'
          />
          {isExpanded && (
            <Link to='/plan' onClick={() => handleLinkClick('Plan')}>
              Plan
            </Link>
          )}
        </div>
        <div className='sidebar-link'>
          <img
            src='https://res.cloudinary.com/dovuffpii/image/upload/v1710303921/Money%20Magnet/goals_mizy6b.svg'
            alt='Goals'
            className='sidebar-icon'
          />
          {isExpanded && (
            <Link to='/goals' onClick={() => handleLinkClick('Goals')}>
              Goals
            </Link>
          )}
        </div>
        <div className='sidebar-link'>
          <img
            src='https://res.cloudinary.com/dovuffpii/image/upload/v1710303921/Money%20Magnet/investments_mmt6do.svg'
            alt='Investments'
            className='sidebar-icon'
          />
          {isExpanded && (
            <Link to='/investments' onClick={() => handleLinkClick('Investments')}>
              Investments
            </Link>
          )}
        </div>
        <div className='sidebar-link'>
          <img
            src='https://res.cloudinary.com/dovuffpii/image/upload/v1710303918/Money%20Magnet/advice_eriooh.svg'
            alt='Advice'
            className='sidebar-icon'
          />
          {isExpanded && (
            <Link to='/advice' onClick={() => handleLinkClick('Advice')}>
              Advice
            </Link>
          )}
        </div>
      </div>
      <div className='user-profile'>
        {/* {user && ( */}
        <div className='sidebar-link profile-link'>
          <img
            src='https://res.cloudinary.com/dovuffpii/image/upload/v1710310110/Money%20Magnet/profile-img-placeholder_ljqrad.svg'
            alt='Profile'
            className='sidebar-icon profile-icon'
          />
          {isExpanded && (
            // <Link to='/profile' className='profile-text'>{user.name}</Link>
            <Link
              to='/profile'
              className='profile-text'
              onClick={() => handlePageTitle('Your Profile')}
            >
              User Name
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
