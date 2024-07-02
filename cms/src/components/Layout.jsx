import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row} from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import { CmsNav } from './CmsNav'

export const Layout = () => {
  return <>
  <CmsNav />
  <Container>
    <Row>
      <Outlet/>
    </Row>
  </Container>
  </>
}
