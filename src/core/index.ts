import productCore from './products'

export default function (env: any) {
  return {
    product: productCore(env)
  }
}