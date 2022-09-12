import { Users } from '../pages/simpleHTTP/HttpRequest'
import { setQueryByName } from './functions'

export const fetchRequest = {
  filterUsers: async (value: string) => {
    const fetchedData = await fetch(setQueryByName(value))
    if (!fetchedData) {
      throw Error('Data fetch error')
    }
    return (await fetchedData.json()) as Users
  },
}
