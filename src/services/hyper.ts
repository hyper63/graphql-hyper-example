import { connect } from 'hyper-connect'

const CONNECT_STRING = process.env.HYPER
const hyper = connect(CONNECT_STRING as string)

export default async function () {
  return hyper.data
}