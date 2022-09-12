import { nameFilter } from './functions'

export const fetchRequest = {
  filterUsers: (value: string) => fetch(nameFilter(value)),
}
