import { createContext } from 'react'

type ContextBuilder = {
  children: React.ReactNode
}

export const contextBuild = <T, P>(hook: () => T) => {
  const Context = createContext<T>(undefined as never)

  return {
    Context,
    ContextProvider: (props: ContextBuilder & P) => {
      const createdHook = hook()

      return <Context.Provider value={createdHook}>{props.children}</Context.Provider>
    },
  }
}
