import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { updateToDo } from '../../redux/action'

const ToDoUpdate = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.todos.todos2)
  const dispatch = useDispatch()

  const [data, setData] = useState({
    id: user[0].id,
    title: user[0].title,
    description: user[0].description,
    startDate: user[0].startDate,
    endDate: user[0].endDate,
    status: user[0].status,
  })
  console.log('hell', data)
  const updateHandler = (formData) => {
    formData.preventDefault()
    console.log('final', data)
    if(data.startDate>data.endDate){
        alert("Start Date and End Date does not match.")
    }
    else{
        
        dispatch(updateToDo(data))
        alert("TASK EDITED!")
        navigate('/todotable')
    }

  }

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <Container fixed sx={{}}>
        <Box
          sx={{ bgcolor: 'white', padding: 5, borderRadius: 5, marginTop: 7 }}
        >
          <h4 className='head'>JUST DO IT</h4> <br></br>
          <form>
            <div class='form-group p-3'>
              <input
                type='text'
                class='form-control'
                name='title'
                placeholder='TASK'
                value={data.title}
                onChange={handleChange}
              />
              <small class='form-text text-muted'>Cmon Let's DO it.</small>
            </div>
            <div class='form-group p-3'>
              <input
                type='text-area'
                class='form-control'
                name='description'
                placeholder='TO DO'
                value={data.description}
                onChange={handleChange}
              />
              <small class='form-text text-muted'>IN DETAIL</small>
            </div>
            <div class='form-group p-3'>
              <input
                type='date'
                class='form-control'
                name='startDate'
                placeholder='TO DO'
                value={data.startDate}
                onChange={handleChange}
                required
              />
              <small class='form-text text-muted'>When to start?</small>
            </div>
            <div class='form-group p-3'>
              <input
                type='date'
                class='form-control'
                name='endDate'
                placeholder='TO DO'
                value={data.endDate}
                onChange={handleChange}
                required
              />
              <small class='form-text text-muted'>DEAD LINE</small>
            </div>
            <div class='ms-3'>
              <small class='form-text text-muted'>STATUS</small>
              <div class='form-check' >
                <input
                  class='form-check-input'
                  type='radio'
                  name='status'
                  id='optionsRadios2'
                  value='OPEN'
                  onChange={handleChange}
                  required
                />
                <label class='form-check-label' for='optionsRadios2'>
                  OPEN
                </label>
              </div>
              <div class='form-check'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='status'
                  id='optionsRadios2'
                  value='CLOSED'
                  onChange={handleChange}
                  required
                />
                <label class='form-check-label' for='optionsRadios2'>
                  CLOSED
                </label>
              </div>
            </div>
            <div class='text-center'>
              <button
                type='button'
                class='btn btn-light p-3 m-3'
                onClick={() => navigate('/todotable')}
              >
                GO BACK
              </button>
              <button
                type='submit'
                class='btn btn-success p-3 m-2'
                onClick={updateHandler}
              >
                UPDATE
              </button>
            </div>{' '}
          </form>
        </Box>
      </Container>
    </div>
  )
}

export default ToDoUpdate
