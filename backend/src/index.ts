import cors from 'cors'
import express from 'express'
import fs from 'fs'

const app = express()
const port = 1234

// connect app with cors
app.use(cors())

type User = {
  id: string
  name: string
  city: string
  age: number
}

type Users = {
  users: User[]
}
const parseRequestContent = (name: string) =>
  name.toLowerCase().trim().replace(/ +/g, '').replace(/[y]/g, 'i')

const readDataFromJSON = (fileName: string): Users => {
  const dataString = fs.readFileSync(`${__dirname}/../${fileName}.json`, 'utf-8')
  return JSON.parse(dataString)
}

app.get('/', (req, res, next) => {
  try {
    // read data from file system
    const dataFromJSON = readDataFromJSON('data')
    // define response
    const test = dataFromJSON.users
    res.send(
      dataFromJSON.users.filter(d =>
        parseRequestContent(d.name).includes(parseRequestContent(req.query.SEARCH!.toString()))
      )
    )
  } catch (error) {
    // This is providing error response
    next(error)
  }
})

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err)
  res.status(500).json('Server side error ')
  res.json(err)
})

// set running port
app.listen(port, () => {
  console.log(`It_Absolvent backend is running on port ${port}`)
})

export {}
