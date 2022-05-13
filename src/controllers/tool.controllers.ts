import { Request, Response } from 'express'
import { Tool } from '../models/tool.model'


export const createTool = async (req: Request, res: Response) => {
    try {
        const { title, link, description, tags } = req.body
        const tool = new Tool()

        tool.title = title
        tool.link = link
        tool.description = description
        tool.tags = tags
    
        await tool.save()
        console.log(tool)
    
        return res.status(201).json(tool)

    } catch (e) {
        if (e instanceof Error) {
            return res.status(500).json({"message": e.message})
        }
    }
}

export const getAllTools = async (req: Request, res: Response) => {
    try {
        let result = await Tool.find()

        if ('title' in req.query) {
            const query_title = String(req.query.title)
            result = result.filter(tool => tool.title.toLocaleLowerCase() === query_title.toLocaleLowerCase())
        }
        
        if ('tag' in req.query) {
            const query_tag = String(req.query.tag)
            result = result.filter(tool => tool.tags.includes(query_tag))
        }

        return res.json(result)
        
    } catch (e) {
        if (e instanceof Error) {
            return res.status(500).json({"message": e.message})
        }
    }

}

export const deleteTool = async (req: Request, res: Response) => {
    try {
        const { id } = req.params

        const tool = await Tool.delete({ id: Number(req.params.id) })   

        if (tool.affected === 0) return res.status(404).json({"message": "tool not found"})
        
        return res.sendStatus(204)
        
    } catch (e) {
        if (e instanceof Error) {
            return res.status(500).json({"message": e.message})
        }
    }
}
