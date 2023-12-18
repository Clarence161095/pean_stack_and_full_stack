const envConfig = {
  env: process.env.REACT_APP_ENV || 'local',
  prefixApi: process.env.REACT_APP_API_URL || 'http://localhost:3000/',
  // SO ON... Back end URL...
  ABCD: process.env.ABCD || 'mock abcd'
}

export default envConfig
