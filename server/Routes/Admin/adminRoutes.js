import express from 'express'
import { addList, manageList, toDo } from '../../Controllers/adminController.js'

const router = express()

router.post('/addList', addList)
router.get('/toDoList', toDo)
router.post('/manageList/:id', manageList)


export default router