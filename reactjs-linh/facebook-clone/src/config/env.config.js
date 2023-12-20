const envConfig =  {
  env: process.env.ENV || 'local',
  prefixAPI: process.env.REACT_APP_API_URL || 'https://localhost:3000/'
}

export default envConfig