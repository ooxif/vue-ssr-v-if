import { createApp } from './app'

export default () => {
  return new Promise(resolve => {
    const { app } = createApp()

    resolve(app)
  })
}
