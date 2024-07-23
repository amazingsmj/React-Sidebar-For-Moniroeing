import React from 'react'
import { Link } from 'react-router-dom'
import NetworkComponent from './NetworkSites'

function Sites() {
  return (
    <div>This is the diffents Sites pages<Link to="/" className='underline'> Go to Dashboard</Link> 
    <NetworkComponent />
    </div>
  )
}

export default Sites