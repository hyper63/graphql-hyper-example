import { z } from 'zod'

const Product = z.object({
  _id: z.string().max(100).min(10),
  //type: z.default('product'),
  name: z.string()
})

type Product = z.infer<typeof Product>

const validate = (p: Product) => Product.parseAsync(p)

export default function (env: any) {
  function create(product: Product) {
    return Promise.resolve(product)
      .then(validate)
      .then(env.hyper.add)
      .then(_ => product)
    //.then((result: any) => result.ok ? product : Promise.reject(result))
  }
  return {
    create,
    //query
  }
}