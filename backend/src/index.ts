import cors from 'cors'
import express from 'express'
import fs from 'fs'

const app = express()
const port = 1234

// connect app with cors
app.use(cors())

type Users = {
  id: string
  name: string
  city: string
  age: number
}

const parseRequestContent = (name: string) =>
  name.toLowerCase().trim().replace(/ +/g, '').replace(/[y]/g, 'i')

app.get('/', (req, res, next) => {
  try {
    // read data from file system
    const dataString = fs.readFileSync(`${__dirname}/../data.json`, 'utf-8')
    const dataFromJSON = JSON.parse(dataString).users
    // define response
    res.send(
      dataFromJSON.filter((user: Users) =>
        parseRequestContent(user.name).includes(parseRequestContent(req.query.SEARCH!.toString()))
      )
    )
  } catch (error) {
    // This is providing error response
    res.sendStatus(400)
  }
})

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err)
  res.status(500)
  res.json(err)
})

// set running port
app.listen(port, () => {
  console.log(`It_Absolvent backend is running on port ${port}`)
})

export {}
