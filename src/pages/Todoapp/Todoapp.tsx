import * as _ from 'lodash'
import { AiOutlineDelete } from 'react-icons/ai'
import { AiOutlineEdit } from 'react-icons/ai'
import { DragDropContext, Draggable, DropResult, Droppable } from '@hello-pangea/dnd'
import { InputTask } from './Input'
import { IoMdAddCircle } from 'react-icons/io'
import { UniversalButton } from './UniversalButton'
import { useLocalStorage } from '../../helpers/functions'
import { v1 } from 'uuid'
import Button from '@mui/material/Button'
import React, { useState } from 'react'
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

type Task = {
  checked: boolean
  text: string
  id: string
}

const initialStateItems = {
  checked: true,
  text: 'Welcome in my to do App!',
  id: v1(),
}

export const Todo = () => {
  const [items, setItems] = useLocalStorage('tasks', [initialStateItems] as Task[])
  const [inputOpen, setInputOpen] = useState(false)
  const [itemToEdit, setItemToEdit] = useState(null as string | null)
  const [filter, setFilter] = useState('all' as FilterValuesType)

  const deleteItem = (id: string) => {
    setItems(items.filter(el => el.id !== id))
  }
  const addItem = (item: string) => {
    setItems([{ checked: false, text: item, id: v1() }, ...items])
  }
  const editItem = (id: string, item: string) => {
    setItems(items.map(el => (el.id === id ? { ...el, text: item } : el)))
  }

  const handleCheck = (id: string, checked: boolean) => () => {
    setItems(prevItems => prevItems.map(el => (el.id === id ? { ...el, checked: !checked } : el)))
  }

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return
    const itemsList = [...items]
    const [reorderedItem] = itemsList.splice(result.source.index, 1)
    itemsList.splice(result.destination.index, 0, reorderedItem)
    setItems(itemsList)
  }

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
            {items
              .filter(el => {
                return filter === 'all'
                  ? el
                  : filter === 'done' && el.checked
                  ? el
                  : filter === 'active' && !el.checked
                  ? el
                  : null
              })
              .map(({ checked, text, id }, index: number) => (
                <Draggable key={id} draggableId={id} index={index}>
                  {provided => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={provided.draggableProps.style}
                    >
                      {id === itemToEdit ? (
                        <InputTask
                          addReminder={(reminder: string) => {
                            setItemToEdit(null)
                            editItem(id, reminder)
                          }}
                          defaultAction='Edit'
                          initialValue={text}
                        />
                      ) : (
                        <Div_TodoItem key={id}>
                          <Label_Checkbox>
                            <Input_Checkbox
                              type='checkbox'
                              name='checked-demo'
                              onChange={handleCheck(id, checked)}
                              checked={checked}
                            />
                          </Label_Checkbox>
                          <Span_TaskLine>{text}</Span_TaskLine>
                          <Span_TaskEdit>
                            <UniversalButton
                              onClick={() => setItemToEdit(id)}
                              icon={AiOutlineEdit}
                              size={40}
                            ></UniversalButton>
                            <UniversalButton
                              onClick={() => deleteItem(id)}
                              icon={AiOutlineDelete}
                              size={40}
                            ></UniversalButton>
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
                addReminder={(reminder: string) => {
                  setInputOpen(false)
                  addItem(reminder)
                }}
                initialValue={''}
                defaultAction={'Add'}
              />
            ) : (
              <UniversalButton
                onClick={() => setInputOpen(true)}
                icon={IoMdAddCircle}
                size={50}
              ></UniversalButton>
            )}
          </Div_ToDoApp>
        )}
      </Droppable>
    </DragDropContext>
  )
}
