import React from 'react'
import '../styles/pageheader.css'

function PageHeader({ sidebarWidth, pageTitle }) {
  const pageHeaderStyle = {
    paddingLeft: `${sidebarWidth}px`,
    transition: 'padding-left 0.3s ease',
  }

  return (
    <div className='page-header' style={pageHeaderStyle}>
      <h4>{pageTitle}</h4>
    </div>
  )
}

export default PageHeader