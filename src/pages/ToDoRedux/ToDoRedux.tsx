import * as _ from 'lodash'
import { AiOutlineDelete } from 'react-icons/ai'
import { AiOutlineEdit } from 'react-icons/ai'
import { AppDispatch, RootState, store } from './store'
import { DragDropContext, Draggable, DropResult, Droppable } from '@hello-pangea/dnd'
import { InputTask } from './Input'
import { IoMdAddCircle } from 'react-icons/io'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { ToDoAppReduxButton } from './ToDoAppReduxButton'
import { deleteTask, editItem, handleOnDrag, markAsCompleted, newTask } from './choseFromReduxState'
import { result } from 'lodash'
import { useState } from 'react'
import { v1 } from 'uuid'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import tw from 'tailwind-styled-components'

const Div_ToDoApp = tw.div`
  flex 
  flex-col 
  gap-y-2 
  w-full 
  sm:w-2/3 
  md:w-1/2 
  max-w-sm 
  rounded-lg 
  p-2 
  shadow-md 
  bg-gray-100 
  text-left 
  characters 
  mx-auto 
  mt-96
`

const Input_Checkbox = tw.input`
  w-6 
  form-tick 
  appearance-none 
  flex-initial 
  bg-white 
  bg-check 
  h-6 
  w-24px 
  min-w-6 
  border 
  border-gray-300 
  rounded-md 
  checked:bg-blue-500 
  checked:border-transparent 
  focus:outline-none
`

const Span_TaskLine = tw.span`
  font-light 
  truncate 
  max-h-16
`

const Span_TaskEdit = tw.span`
  flex  
  flex-row
`

const Div_TodoItem = tw.div`
  border 
  bg-gray-200 
  rounded flex 
  flex-row 
  items-center 
  p-1 
  justify-between 
  select-none
`
const Label_Checkbox = tw.label`
  flex 
  items-center 
  justify-start 
  space-x-3 
  overflow-auto
`
const H1_ToDoApp = tw.h1`
  text-xl 
  text-center 
  p-2 
  font-serif
`

const Div_FilterContainer = tw.h1`
  flex 
  gap-3 
  mx-auto
`
type FilterValuesType = 'all' | 'active' | 'done'

export const TodoUI = () => {
  const [inputOpen, setInputOpen] = useState(false)
  const [itemToEdit, setItemToEdit] = useState(null as string | null)
  const [filter, setFilter] = useState('all' as FilterValuesType)
  const dispatch = useDispatch<AppDispatch>()
  const handleOnDragEnd = (result: DropResult) => {
    dispatch(handleOnDrag(result))
  }
  const selectFromStore = useSelector((state: RootState) => state.todo)

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId='characters'>
        {provided => (
          <Div_ToDoApp {...provided.droppableProps} ref={provided.innerRef}>
            <H1_ToDoApp>To-Do App</H1_ToDoApp>
            <Stack direction='row'>
              <Div_FilterContainer>
                <Button variant='contained' onClick={() => setFilter('done')}>
                  Done
                </Button>
                <Button variant='contained' onClick={() => setFilter('all')}>
                  All
                </Button>
                <Button variant='contained' onClick={() => setFilter('active')}>
                  Active
                </Button>
              </Div_FilterContainer>
            </Stack>
            {selectFromStore
              .filter(task => {
                return filter === 'all'
                  ? task
                  : filter === 'done' && task.checked
                  ? task
                  : filter === 'active' && !task.checked
                  ? task
                  : null
              })
              .map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {provided => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={provided.draggableProps.style}
                    >
                      {item.id === itemToEdit ? (
                        <InputTask
                          addReminder={reminder => {
                            setItemToEdit(null)
                            dispatch(editItem(item.id, reminder as string))
                          }}
                          defaultAction='Edit'
                        />
                      ) : (
                        <Div_TodoItem key={item.id}>
                          <Label_Checkbox>
                            <Input_Checkbox
                              type='checkbox'
                              name='checked-demo'
                              onChange={() => dispatch(markAsCompleted(item.id, item.checked))}
                              checked={item.checked}
                            />
                          </Label_Checkbox>
                          <Span_TaskLine>{item.text}</Span_TaskLine>
                          <Span_TaskEdit>
                            <ToDoAppReduxButton
                              onClick={() => setItemToEdit(item.id)}
                              icon={AiOutlineEdit}
                              size={40}
                            />
                            <ToDoAppReduxButton
                              onClick={() => dispatch(deleteTask(item.id))}
                              icon={AiOutlineDelete}
                              size={40}
                            />
                          </Span_TaskEdit>
                        </Div_TodoItem>
                      )}
                    </div>
                  )}
                </Draggable>
              ))}
            {provided.placeholder}
            {inputOpen ? (
              <InputTask
                addReminder={reminder => {
                  setInputOpen(false)
                  dispatch(newTask(reminder as string))
                }}
                defaultAction={'Add'}
              />
            ) : (
              <ToDoAppReduxButton
                onClick={() => setInputOpen(true)}
                icon={IoMdAddCircle}
                size={50}
              />
            )}
          </Div_ToDoApp>
        )}
      </Droppable>
    </DragDropContext>
  )
}
export const TodoListRedux = () => {
  return (
    <Provider store={store}>
      <TodoUI />
    </Provider>
  )
}
