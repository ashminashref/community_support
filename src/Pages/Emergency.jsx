import React from 'react'
import BottomNav from '../Sharedcomp/BottomNav'
import Appbar from '../Sharedcomp/Appbar'
import Hero from '../Components/Emergency/Hero'
import { Container } from 'react-bootstrap'
function Emergency() {
  return (
    <div>
        <Appbar/>
        <Container >
        <Hero/>
        </Container>
        <BottomNav/>
    </div>
  )
}

export default Emergency