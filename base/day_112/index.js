const store = {
  user: {
    name: 'Home'
  },
  posts: [],
  folders: [],
  dispatch: (action) => {
    switch (action.type) {
      case 'CHANGE_NAME':
        this.user.name = action.payload
        break
      case 'ADD_POST':
        this.posts.push(action.payload)
        break
      case 'ADD_FOLDER':
        this.folders.push(action.payload)
        break
      default:
        break
    }
  }
}

store.dispatch({ type: 'CHANGE_NAME', payload: 'Login' })
store.user.name = 'Login'

const HomeComponent = () => {
  const [state, setState] = useState({ name: 'Home' })
  const bienA = { name: 'Home' }

  return (
    <div>
      <p>{state.name}</p>
      <p>{bienA.name}</p>
      <ShowComponent name={state.name} />
      <ShowComponent name={bienA.name} />
      <input type="text" value={state.name} onChange={(e) => {
        bienA.name = e.target.value
        setState({ name: e.target.value })
      }} />
    </div>
  )
}

const ShowComponent = ({ name }) => {
  return (
    <div>
      <h1>Show</h1>
      <p>{name}</p>
    </div>
  )
}