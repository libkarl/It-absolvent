import { DropResult } from '@hello-pangea/dnd'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Task } from './ToDoRedux'
import { v1 } from 'uuid'

const localStorageMemoryKey = 'tasks'
const initialStateItems: Task[] = [
  {
    checked: true,
    text: 'Welcome in my to do App!',
    id: v1(),
  },
]

const loadFromStorage = (key: string, initialStateItems: Task[]) => {
  try {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialStateItems
  } catch (error) {
    console.log(error)
  }
}

const saveInsideLocalStorage = (key: string, valueToStore: Task[]) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(valueToStore))
  } catch (error) {
    console.error
  }
}

const todoSlice = createSlice({
  name: 'todo',
  initialState: loadFromStorage(localStorageMemoryKey, initialStateItems) as Task[],
  reducers: {
    newTask: {
      reducer: (state, action: PayloadAction<Task>) => {
        state.push(action.payload)
        saveInsideLocalStorage(localStorageMemoryKey, state)
      },
      prepare: (taskName: string) => ({
        payload: {
          id: v1(),
          text: taskName,
          checked: false,
        } as Task,
      }),
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      const index = state.findIndex(task => task.id === action.payload).toString()
      state.filter(el => el.id !== index)
      saveInsideLocalStorage(localStorageMemoryKey, state)
    },
    markAsCompleted(state, action: PayloadAction<{ id: string; checked: boolean }>) {
      state.map(el =>
        el.id === action.payload.id ? { ...el, checked: !action.payload.checked } : el
      )
      saveInsideLocalStorage(localStorageMemoryKey, state)
    },
    reorderTasks: (state, action: PayloadAction<DropResult>) => {
      if (!action.payload.destination) return
      const [removed] = state.splice(action.payload.source.index, 1)
      state.splice(action.payload.destination?.index as number, 0, removed)
      saveInsideLocalStorage(localStorageMemoryKey, state)
    },
    editItem(state, action: PayloadAction<{ id: string; reminder: string }>) {
      state.map(el => (el.id === action.payload.id ? { ...el, text: action.payload.reminder } : el))
      saveInsideLocalStorage(localStorageMemoryKey, state)
    },
  },
})

export const { newTask, deleteTask, markAsCompleted, reorderTasks, editItem } = todoSlice.actions
export const todoReducer = todoSlice.reducer
