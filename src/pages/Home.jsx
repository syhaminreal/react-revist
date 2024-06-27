// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import {  Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Home = () => {
  const [num, setNum] = useState(1)

  useEffect(() =>{
console.log('Always running')
  })


  useEffect(()=>{
console.log('Runnig on load and one time')

return () => {
  console.log('Runs on end')
}
  },[])

  useEffect(() => {
console.log('Runnnig on the value change')
  },[num])


  const increase = () => {
    setNum(num +1)

    console.log(num)
  }
  return    <Row>
        <Col xs={12}>
          <Row>
            <Col className='mt-3'><h1>Home</h1></Col>
          </Row>
          <Row>
          <Col className="my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fugit voluptatem libero tempora molestiae distinctio reprehenderit nulla omnis corrupti dicta? Animi, eos? Iste officiis rerum amet eaque fugit ex maxime?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam odit, vero neque quod vitae asperiores maxime illum labore obcaecati eveniet. Nemo nisi delectus nobis mollitia minus dignissimos aliquam nostrum illum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis expedita, nostrum magnam sit hic minima quo quod eligendi beatae, omnis dolor sunt nam in amet magni explicabo, commodi non odio?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magni, doloribus cupiditate exercitationem beatae fugit ratione mollitia consectetur ipsam aperiam placeat fugiat. Quisquam sed voluptatum quaerat facilis odio, nobis labore.
          </Col>
          </Row>
        </Col>
      </Row>
   
  
};
