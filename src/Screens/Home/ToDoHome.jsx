import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import NavBar from '../../components/navbar/NavBar'


const ToDoHome = () => {
  const [motivation, setMotivation] = useState('')
  const [Quotes, setQuotes] = useState()

  const navigate = useNavigate()
  useEffect(() => {
    axios.get('https://type.fit/api/quotes').then((res) => {
      console.log(res.data)
      setMotivation(res.data)
    })
  }, [])
  let i = 0
  let qoutes 
  setInterval(() => {
    qoutes = motivation[i].text
    setQuotes(qoutes)
    i++
  }, 5000)
  console.log(Quotes)


  return (
    <>
      <NavBar />
      <div style={{ display: 'flex' }}>
        <img
          src='https://i.pinimg.com/originals/70/08/2b/70082ba17f7a11b4502ee5e180b3cc94.gif'
          alt='verthe'
          style={{ width: '35%', height: '100vh' }}
        />
        <div>
          <h1 style={{ marginLeft: 150, marginTop: 100, color: '#d66a38' }}>
            WANT TO CHANGE YOUR LIFE?
          </h1>
          <h1 style={{ marginLeft: 150, marginTop: 5, color: '#3848d6' }}>
            SET A PLAN!
          </h1>
          <h1 style={{ marginLeft: 150, marginTop: 5, color: 'white' }}>
            AND JUST DO IT!
          </h1>
          <button
            type='button'
            class='btn btn-success '
            style={{ marginLeft: 150, marginTop: 10 }}
            onClick={() => navigate('/todoform')}
          >
            SET TASK
          </button>
          {/* {motivation.map(data => )} */}
          {qoutes}
          <h6 style={{ marginLeft: 150, marginTop: 50 }}>{Quotes}</h6>
        </div>
      </div>
    </>
  )
}

export default ToDoHome
