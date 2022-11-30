import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import NavBar from '../navbar/NavBar'
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone'
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone'
import { deleteToDo, editToDo } from '../../redux/action'

const ToDoClosed = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const data = useSelector((state) => state.todos.todos)
  return (
    <div>
      <NavBar />
      <h2 class='text-center mt-5'>YOU DID IT!</h2>
      <table class='table table-hover'>
        <thead>
          <tr>
            <th scope='col'>TASK</th>
            <th scope='col'>DESCRIPTION</th>
            <th scope='col'>START DATE</th>
            <th scope='col'> END DATE</th>
            <th scope='col'>STATUS</th>
            <th>EDIT/DELETE</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((todos) => todos.status === 'CLOSED')
            .map((todo) => (
              <tr class='table-active'>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.startDate}</td>
                <td>{todo.endDate}</td>
                <td>{todo.status}</td>
                <td>
                  <EditTwoToneIcon
                    sx={{
                      cursor: 'pointer',
                      marginRight: 2,
                      bgcolor: '#3385ff',
                    }}
                    onClick={(id) => {
                      dispatch(editToDo(todo.id))
                      navigate('/todoupdate')
                    }}
                  />
                  <DeleteOutlineTwoToneIcon
                    sx={{ cursor: 'pointer', bgcolor: '#ff471a' }}
                    data-mdb-toggle='modal'
                    data-mdb-target='#exampleModal'
                  />
                  <div
                    class='modal fade'
                    id='exampleModal'
                    tabindex='-1'
                    aria-labelledby='exampleModalLabel'
                    aria-hidden='true'
                  >
                    <div class='modal-dialog'>
                      <div class='modal-content'>
                        <div class='modal-header'>
                          <h5 class='modal-title' id='exampleModalLabel'>
                            DELETE TODO
                          </h5>
                          <button
                            type='button'
                            class='btn-close'
                            data-mdb-dismiss='modal'
                            aria-label='Close'
                          ></button>
                        </div>
                        <div class='modal-body'>Are you sure you want to Delete?</div>
                        <div class='modal-footer'>
                          <button
                            type='button'
                            class='btn btn-dark'
                            data-mdb-dismiss='modal'
                          >
                            CANCEL
                          </button>
                          <button
                            type='button'
                            class='btn btn-dark'
                            onClick={(id) => {
                              dispatch(deleteToDo(todo.id))
                            }}
                            data-mdb-dismiss='modal'
                          >
                            DELETE 
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div class='text-center mt-5'>
        <button
          onClick={() => navigate('/todoform')}
          class='btn btn-success mx-5'
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          ADD TO DO
        </button>
      </div>
    </div>
  )
}

export default ToDoClosed
