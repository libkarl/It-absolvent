import { Add } from './Add'
import { Delete } from './Delete'
import { DragDropContext, Draggable, DropResult, Droppable } from '@hello-pangea/dnd'
import { Edit } from './Edit'
import { InputTask } from './Input'
import { delayDefinition, useLocalStorage } from '../../helpers/functions'
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

export const Todo = () => {
  const [items, setItems] = useLocalStorage()
  const [inputOpen, setInputOpen] = useState(false)
  const [itemToEdit, setItemToEdit] = useState(null)
  const [counter, setCounter] = useState(2)
  const [filter, setFilter] = useState<[boolean, string, string][]>(items)

  const deleteItem = (i: string) => {
    var newItems = [...items]
    newItems = newItems.filter(el => {
      return el[2] !== i
    })
    setFilter(newItems)
    setItems(newItems)
  }
  const addItem = (item: string) => {
    var newItems: [boolean, string, string][] = [...items, [false, item, v1()]]
    setFilter(newItems)
    setItems(newItems)
  }
  const editItem = (i: string, item: string) => {
    var newItems = [...items]
    let foundIndex = newItems.findIndex(element => element[2] === i)
    newItems[foundIndex][1] = item
    setFilter(newItems)
    setItems(newItems)
  }

  const newFilter = (a: string): void => {
    if (a === 'active') {
      var state = items.filter(obj => {
        return obj[0] === false
      })
      setFilter(state)
    } else if (a === 'done') {
      var state = items.filter(obj => {
        return obj[0] === true
      })
      setFilter(state)
    } else {
      var newItems = [...items]
      return setFilter(newItems)
    }
  }

  const handleCheck = (i: string) => () => {
    var newItems = [...items]
    let foundIndex = newItems.findIndex(element => element[2] === i)
    if (newItems[foundIndex][0] === true) {
      newItems[foundIndex][0] = false
      setFilter(newItems)
      setItems(newItems)
    } else {
      newItems[foundIndex][0] = true
      setFilter(newItems)
      setItems(newItems)
    }
  }

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return
    var myitems = Array.from(items)
    var [reorderedItem] = myitems.splice(result.source.index, 1)
    myitems.splice(result.destination.index, 0, reorderedItem)
    setItems(myitems)
    setFilter(myitems)
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId='characters'>
        {provided => (
          <Div_ToDoApp {...provided.droppableProps} ref={provided.innerRef}>
            <H1_ToDoApp>To-Do App</H1_ToDoApp>
            <Stack direction='row'>
              <div className='flex gap-3 mx-auto'>
                <Button variant='contained' onClick={() => newFilter('done')}>
                  Done
                </Button>
                <Button variant='contained' onClick={() => newFilter('all')}>
                  All
                </Button>
                <Button variant='contained' onClick={() => newFilter('active')}>
                  Active
                </Button>
              </div>
            </Stack>
            {filter.map(([checked, desc, id], index: any) => (
              <Draggable key={id} draggableId={id} index={index}>
                {provided => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={provided.draggableProps.style}
                  >
                    {index === itemToEdit ? (
                      <InputTask
                        addReminder={(reminder: string) => {
                          setItemToEdit(null)
                          editItem(id, reminder)
                        }}
                        defaultAction='Edit'
                        initialValue={desc}
                      />
                    ) : (
                      <Div_TodoItem key={id}>
                        <Label_Checkbox>
                          <Input_Checkbox
                            type='checkbox'
                            name='checked-demo'
                            onChange={handleCheck(id)}
                            checked={checked}
                          />
                        </Label_Checkbox>
                        <Span_TaskLine>{desc}</Span_TaskLine>
                        <Span_TaskEdit>
                          <Edit onClick={() => setItemToEdit(index)} />
                          <Delete onClick={() => deleteItem(id)} />
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
              <Add onClick={() => setInputOpen(true)} />
            )}
          </Div_ToDoApp>
        )}
      </Droppable>
    </DragDropContext>
  )
}
