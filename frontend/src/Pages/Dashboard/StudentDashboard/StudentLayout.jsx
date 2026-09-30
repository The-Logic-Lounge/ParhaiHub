import React from 'react'
import {Outlet} from 'react-router-dom'
import StudentDashboard from './StudentDashboard'

function StudentLayout() {
  return (
    <>
    <StudentDashboard/>
    <main className="dashboard-content">
      <Outlet/>
    </main>
    </>
  )
}

export default StudentLayout