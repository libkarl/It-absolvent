import cors from 'cors'
import express from 'express'
import fs from 'fs'

const app = express()
const port = 1234

app.use(cors())

type User = {
  id: string
  name: string
  city: string
  age: number
}

type StoredData = {
  users: User[]
}
const parseRequestContent = (name: string) =>
  name.toLowerCase().trim().replace(/ +/g, '').replace(/[y]/g, 'i')

const readDataFromJSON = (fileName: string) => {
  const dataString = fs.readFileSync(`${__dirname}/../${fileName}.json`, 'utf-8')
  return JSON.parse(dataString) as StoredData
}

app.get('/', (req, res, next) => {
  try {
    const dataFromJSON = readDataFromJSON('data')
    res.send(
      dataFromJSON.users.filter(d =>
        console.log(d.name)
        parseRequestContent(d.name).includes(parseRequestContent(req.query.search!.toString()))
      )
    )
  } catch (error) {
    console.log("catch error")
    next(error)
  }
})

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err)
  res.status(500).json('Server side error ')
  res.json(err)
})

app.listen(port, () => {
  console.log(`It_Absolvent backend is running on port ${port}`)
})

export {}
