import React from 'react'
import {Outlet} from 'react-router-dom'
import TeacherDashboard from './TeacherDashboard'

function TeacherLayout() {
  return (
    <>
    <TeacherDashboard/>
    <main className="dashboard-content">
      <Outlet/>
    </main>
    </>
  )
}

export default TeacherLayout