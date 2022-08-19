import { Add } from './Add'
import { Delete } from './Delete'
import { DragDropContext, Draggable, DropResult, Droppable } from '@hello-pangea/dnd'
import { Edit } from './Edit'
import { Input } from './Input'
import { delayDefinition } from '../../helpers/functions'
import { v1 } from 'uuid'
import Button from '@mui/material/Button'
import React, { useEffect, useState } from 'react'
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
  const getLocalStorage = (): [boolean, string, string][] => {
    localStorage.setItem('inicialization', JSON.stringify('inicializace localStorage'))
    if (localStorage.length === 1) {
      localStorage.setItem('items', JSON.stringify([[true, 'Welcome in my to do App!', '1']]))
      var parse = JSON.parse(localStorage.getItem('items') as string)
      return Array.from(parse)
    } else {
      var parse = JSON.parse(localStorage.getItem('items') as string)
      return Array.from(parse)
    }
  }
  const [items, setItems] = useState<[boolean, string, string][]>(() => getLocalStorage())
  const [inputOpen, setInputOpen] = useState(false)
  const [itemToEdit, setItemToEdit] = useState(null)
  const [counter, setCounter] = useState(2)

  const deleteItem = (i: number) => {
    setItems(items => {
      const newItems = getLocalStorage()
      newItems.splice(i, 1)
      setTimeout(() => {
        localStorage.setItem('items', JSON.stringify(newItems))
      }, 20)
      return newItems
    })
  }
  const addItem = (item: string) => {
    setItems(items => {
      const newItems = getLocalStorage()
      newItems.push([false, item, v1()])
      setTimeout(() => {
        localStorage.setItem('items', JSON.stringify(newItems))
      }, 20)
      return newItems
    })
  }
  const editItem = (i: number, item: string) => {
    setItems(items => {
      const newItems = getLocalStorage()
      newItems[i][1] = item
      setTimeout(() => {
        localStorage.setItem('items', JSON.stringify(newItems))
      }, 20)
      return newItems
    })
  }

  const setFilter = (a: string) => {
    if (a === 'active') {
      const newItems = getLocalStorage()
      const state = newItems.filter(obj => {
        return obj[0] === false
      })
      setItems(state)
    } else if (a === 'done') {
      const newItems = getLocalStorage()
      const state = newItems.filter(obj => {
        return obj[0] === true
      })
      setItems(state)
    } else {
      const newItems = getLocalStorage()
      setItems(newItems)
    }
  }

  const handleCheck = (i: number) => () => {
    const newItems = [...items]
    const taskState: boolean = newItems[i][0]
    if (taskState === true) {
      setItems(items => {
        newItems[i][0] = false
        setTimeout(() => {
          localStorage.setItem('items', JSON.stringify(newItems))
        }, 20)
        return newItems
      })
    } else {
      setItems(items => {
        newItems[i][0] = true
        setTimeout(() => {
          localStorage.setItem('items', JSON.stringify(newItems))
        }, 20)
        return newItems
      })
    }
  }

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return
    const myitems = Array.from(items)
    const [reorderedItem] = myitems.splice(result.source.index, 1)
    myitems.splice(result.destination.index, 0, reorderedItem)
    setTimeout(() => {
      localStorage.setItem('items', JSON.stringify(myitems))
    }, 20)
    setItems(myitems)
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId='characters'>
        {provided => (
          <Div_ToDoApp {...provided.droppableProps} ref={provided.innerRef}>
            <H1_ToDoApp>To-Do App</H1_ToDoApp>
            <Stack direction='row'>
              <div className='flex gap-3 mx-auto'>
                <Button variant='contained' onClick={() => setFilter('done')}>
                  Done
                </Button>
                <Button variant='contained' onClick={() => setFilter('all')}>
                  All
                </Button>
                <Button variant='contained' onClick={() => setFilter('active')}>
                  Active
                </Button>
              </div>
            </Stack>
            {items.map(([checked, desc, id], index: any) => (
              <Draggable key={id} draggableId={id} index={index}>
                {provided => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={provided.draggableProps.style}
                  >
                    {index === itemToEdit ? (
                      <Input
                        addReminder={(reminder: string) => {
                          setItemToEdit(null)
                          editItem(index, reminder)
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
                            onChange={handleCheck(index)}
                            checked={checked}
                          />
                        </Label_Checkbox>
                        <Span_TaskLine>{desc}</Span_TaskLine>
                        <Span_TaskEdit>
                          <Edit onClick={() => setItemToEdit(index)} />
                          <Delete onClick={() => deleteItem(index)} />
                        </Span_TaskEdit>
                      </Div_TodoItem>
                    )}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
            {inputOpen ? (
              <Input
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
