import React from 'react'
import Appbar from '../Sharedcomp/Appbar'
import BottomNav from '../Sharedcomp/BottomNav'
import Quick from '../Components/Home/Quick'
import {Container} from 'react-bootstrap'
import Announce from '../Components/Home/Announce'
function Home() {
  return (
    <div>
        <Appbar/>
        <Container>
        <Quick/>
        <Announce/>
        </Container>
        <BottomNav/>
    </div>
  )
}

export default Home