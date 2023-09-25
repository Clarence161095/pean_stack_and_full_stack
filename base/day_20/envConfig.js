import { config } from 'dotenv'
config()

const envConfig = {
  db: process.env.SECRET_KEY,
  mode: process.env.START_MODE,
}

export default envConfig