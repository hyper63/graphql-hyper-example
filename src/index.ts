import express, { RequestHandler } from 'express'
import { getGraphQLParameters, processRequest, renderGraphiQL, shouldRenderGraphiQL, sendResult } from 'graphql-helix'
import { schema } from './schema'

const app = express()

app.use(express.json())

app.use('/graphql', async (req, res) => {
  const request = {
    body: req.body,
    headers: req.headers,
    method: req.method,
    query: req.query
  }

  if (shouldRenderGraphiQL(request)) {
    res.send(renderGraphiQL())
  } else {
    const { operationName, query, variables } = getGraphQLParameters(request)

    const result = await processRequest({
      operationName,
      query,
      variables,
      request,
      schema
    })

    sendResult(result, res)
  }
})

app.listen(3000, () => {
  console.log('GraphQL server is running...')
})