import { Router } from 'express'
import { getAllTools, createTool, deleteTool } from '../controllers/tool.controllers'


const router = Router()

router.get('/tools', getAllTools)
router.post('/tools', createTool)
router.delete('/tools/:id', deleteTool)

export default router