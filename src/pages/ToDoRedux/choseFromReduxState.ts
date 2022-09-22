import { DropResult } from '@hello-pangea/dnd'
import { v1 } from 'uuid'

export type Task = typeof initialStateItems[number]
type ActionTypes =
  | ReturnType<typeof newTask>
  | ReturnType<typeof deleteTask>
  | ReturnType<typeof handleOnDrag>
  | ReturnType<typeof markAsCompleted>
  | ReturnType<typeof editItem>
export const initialStateItems = [
  {
    checked: true,
    text: 'Welcome in my to do App!',
    id: v1(),
  },
]

export const todoReducer = (state = initialStateItems, action: ActionTypes): Task[] => {
  switch (action.type) {
    case 'NEW_TASK':
      return [...state, { id: v1(), text: action.taskText, checked: false }]
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.id)
    case 'MARK_AS_COMPLETE':
      return state.map(task =>
        task.id === action.id ? { ...task, checked: !action.checked } : task
      )
    case 'HANDLE_ON_DRAG_END':
      const [reorderedItem] = state.splice(action.source, 1)
      state.splice(action.destination, 0, reorderedItem)
      return state
    case 'EDIT_ITEM':
      return state.map(task => (task.id === action.id ? { ...task, text: action.reminder } : task))
    default:
      return state
  }
}

export const newTask = (taskText: string) => {
  return {
    type: 'NEW_TASK',
    taskText,
  } as const
}

export const deleteTask = (id: string) => {
  return {
    type: 'DELETE_TASK',
    id,
  } as const
}
export const markAsCompleted = (payload: { id: string; checked: boolean }) => {
  return {
    type: 'MARK_AS_COMPLETE',
    id: payload.id,
    checked: payload.checked,
  } as const
}
export const handleOnDrag = (result: DropResult) => {
  return {
    type: 'HANDLE_ON_DRAG_END',
    destination: result.destination?.index as number,
    source: result.source.index,
  } as const
}

export const editItem = (payload: { id: string; reminder: string }) => {
  return {
    type: 'EDIT_ITEM',
    id: payload.id,
    reminder: payload.reminder,
  } as const
}
