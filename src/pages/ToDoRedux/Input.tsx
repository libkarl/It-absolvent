import * as React from 'react'
import tw from 'tailwind-styled-components'

const Form_Input = tw.form`
  flex 
  flex-row 
  w-full 
  justify-center 
  gap-x-1
`

const Input_style = tw.input`
  rounded-lg 
  border-transparent 
  flex-1 
  appearance-none 
  border 
  border-gray-300 
  w-full 
  py-1 
  px-4 
  bg-white 
  text-gray-700 
  placeholder-gray-400 
  shadow-sm 
  text-base 
  focus:outline-none 
  focus:ring-2 
  focus:ring-purple-600 
  focus:border-transparent
`

const Button_Submit = tw.button`
  px-2 
  py-1 
  text-base 
  font-semibold 
  text-white 
  bg-purple-600 
  rounded-lg 
  shadow-md 
  hover:bg-purple-700 
  focus:outline-none 
  focus:ring-2 
  focus:ring-purple-500 
  focus:ring-offset-2 
  focus:ring-offset-purple-200

`

type InputProps = {
  addReminder: (rmd: string | undefined) => void
  defaultAction: string
}

export const InputTask = (props: InputProps) => {
  const [myInput, setMyInput] = React.useState('')
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    props.addReminder(myInput as string)
    event.preventDefault()
  }
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => setMyInput(e.currentTarget.value)
  return (
    <Form_Input onSubmit={handleSubmit}>
      <Input_style
        value={myInput}
        onChange={handleChange}
        type='text'
        id='rounded-email'
        placeholder='Your reminder'
      />
      <Button_Submit type='submit'>{props.defaultAction}</Button_Submit>
    </Form_Input>
  )
}
