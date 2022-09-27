import { DropResult } from '@hello-pangea/dnd'
import { v1 } from 'uuid'

export type Task = typeof initialStateItems[number]
type GetActions<T> = T extends Record<any, (...args: any[]) => infer V> ? V : never

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

export const newTask = (taskText: string) => ({
  type: 'NEW_TASK' as const,
  taskText,
})

export const deleteTask = (id: string) => ({
  type: 'DELETE_TASK' as const,
  id,
})
export const markAsCompleted = (id: string, checked: boolean) => ({
  type: 'MARK_AS_COMPLETE' as const,
  id: id,
  checked: checked,
})
export const handleOnDrag = (result: DropResult) => ({
  type: 'HANDLE_ON_DRAG_END' as const,
  destination: result.destination?.index as number,
  source: result.source.index,
})

export const editItem = (id: string, reminder: string) => ({
  type: 'EDIT_ITEM' as const,
  id: id,
  reminder: reminder,
})


type AllReduxActions = GetAllReduxActions<typeof actions>

export type GetAllReduxActions<T> = T extends (actions: infer Actions, ...args: any[]) => any
  ? keyof Actions extends []
    ? never
    : Actions
  : T extends Record<string, infer Values>
  ? GetAllReduxActions<Values>
  : never

const actions = {
  newTask: (taskText: string) => ({
    type: 'NEW_TASK' as const,
    taskText,
  }),

  deleteTask: (id: string) => ({
    type: 'DELETE_TASK' as const,
    id,
  }),

  markAsCompleted: (id: string, checked: boolean) => ({
    type: 'MARK_AS_COMPLETE' as const,
    id: id,
    checked: checked,
  }),

  handleOnDrag: (result: DropResult) => ({
    type: 'HANDLE_ON_DRAG_END' as const,
    destination: result.destination?.index as number,
    source: result.source.index,
  }),
  editItem: (id: string, reminder: string) => ({
    type: 'EDIT_ITEM' as const,
    id: id,
    reminder: reminder,
  }),
}

export const todoReducer = (state = initialStateItems, action: <AllReduxActions>): Task[] => {
  switch (action) {
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