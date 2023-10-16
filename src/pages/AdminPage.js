import React from 'react'
import { Container } from '@mui/material'
import AdminInfo from '../components/AdminPage/AdminInfo'
import AdminControlPanel from '../components/AdminPage/AdminControlPanel'
import cornicetta from '../images/background/cornice.svg'

export default function AdminPage({user}) {
  return (
    <Container maxWidth={1100} left={"50%"}>
      <AdminInfo user = {user} />
      <div style={{ backgroundImage: `url(${cornicetta})`, height: "30px", marginTop: "30px" }} />
      <AdminControlPanel />
    </Container>
  )
}
