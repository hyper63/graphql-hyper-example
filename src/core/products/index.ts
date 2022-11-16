import { z } from 'zod'
import { prop } from 'ramda'

const Product = z.object({
  _id: z.string(),
  type: z.string().default('product'),
  name: z.string()
})

type Product = z.infer<typeof Product>

const validate = (p: Product) => Product.parseAsync(p)

export default function (env: any) {

  function query() {
    return env.hyper.query({ type: 'product' })
      .then(prop('docs'))
  }

  function create(product: Product) {
    return Promise.resolve(product)
      .then(validate)
      .then(env.hyper.add)
      .then((result: any) => result.ok ? product : Promise.reject(result))
  }
  return {
    create,
    query
  }
}