import express from 'express'
import dotenv from 'dotenv'
import { productRouter } from './Routes/productRouter.js'
import { connect } from 'mongoose'
import cors from 'cors'


dotenv.config()
const app = express()
const PORT = 3000
const URI = process.env.URI

app.use(cors())
app.use(express.json())
app.use("/",productRouter)

app.listen(PORT,()=>{
    console.log(`server is active ${PORT}`)

    connect(URI).then(()=>console.log("connected to the mongoDB"))
})