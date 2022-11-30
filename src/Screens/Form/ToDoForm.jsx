import React from 'react'
import Box from '@mui/material/Box'
import './ToDoForm.css'
import Container from '@mui/material/Container'
import { useDispatch } from 'react-redux'
import { addToDo } from '../../redux/action'
import { useNavigate } from 'react-router'
import uuid from 'react-uuid'

const ToDoForm = () => {
  const dispatch = useDispatch()

  const updateHandler = (formData) => {
    formData.preventDefault()
    var temp = {
      id: uuid(),
      title: formData.target.title.value,
      description: formData.target.description.value,
      startDate: formData.target.startDate.value,
      endDate: formData.target.endDate.value,
      status: formData.target.status.value,
    }
    if (temp.startDate > temp.endDate) {
      alert('Start Date and End Date does not match.')
    } else {
      alert("TASK ADDED SUCCESSFULLY!")                 
      dispatch(addToDo(temp))
      navigate('/todotable')
    }
  }

  const navigate = useNavigate()

  return (
    <div>
      <Container fixed sx={{}}>
        <Box
          sx={{ bgcolor: 'white', padding: 5, borderRadius: 5, marginTop: 7 }}
        >
          <h4 className='head'>JUST DO IT</h4> <br></br>
          <form onSubmit={updateHandler}>
            <div class='form-group p-3'>
              <input
                type='text'
                class='form-control'
                name='title'
                placeholder='TASK'
              />
              <small class='form-text text-muted'>Cmon Let's DO it.</small>
            </div>
            <div class='form-group p-3'>
              <input
                type='text-area'
                class='form-control'
                name='description'
                placeholder='TO DO'
                required
              />
              <small class='form-text text-muted'>IN DETAIL</small>
            </div>
            <div class='form-group p-3'>
              <input
                type='date'
                class='form-control'
                name='startDate'
                placeholder='TO DO'
              />
              <small class='form-text text-muted'>When to start?</small>
            </div>
            <div class='form-group p-3'>
              <input
                type='date'
                class='form-control'
                name='endDate'
                placeholder='TO DO'
              />
              <small class='form-text text-muted'>DEAD LINE</small>
            </div>
            <div class='ms-3'>
              <small class='form-text text-muted'>STATUS</small>
              <div class='form-check'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='status'
                  id='optionsRadios2'
                  value='OPEN'
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
              >
                SET TASK
              </button>
            </div>
          </form>
          <div
            class='modal fade'
            id='exampleModal'
            tabindex='-1'
            role='dialog'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'
          >
            <div class='modal-dialog' role='document'>
              <div class='modal-content'>
                <div class='modal-header'>
                  <h5 class='modal-title' id='exampleModalLabel'>
                    Modal title
                  </h5>
                  <button
                    type='button'
                    class='close'
                    data-dismiss='modal'
                    aria-label='Close'
                  >
                    <span aria-hidden='true'>&times;</span>
                  </button>
                </div>
                <div class='modal-body'>...</div>
                <div class='modal-footer'>
                  <button
                    type='button'
                    class='btn btn-secondary'
                    data-dismiss='modal'
                  >
                    Close
                  </button>
                  <button type='button' class='btn btn-primary'>
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Container>
    </div>
  )
}

export default ToDoForm
