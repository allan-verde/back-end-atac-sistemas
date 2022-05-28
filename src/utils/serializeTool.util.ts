import { Tool } from '../entities/Tool'

const serializeToolUtils = (tool: Tool) => {
  const { user, ...toolWOU } = tool
  return toolWOU
}

export default serializeToolUtils
