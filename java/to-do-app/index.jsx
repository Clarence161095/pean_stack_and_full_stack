const useButton = () => {
  // Do lot of stuff here
  const [isLoading, setIsLoading] = useState(false)
  const isMock = true

  const handleClick = () => {
    console.log('Button clicked')
  }

  if (isMock) {
    return {
      handleClick: () => console.log('Button clicked'),
      isLoading: false
    }
  }

  return {
    handleClick,
    isLoading
  }
}

const Button = ({ children }) => {
  const { handleClick, isLoading } = useButton()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <button
        className='w-32 h-12 bg-blue-500 text-white'
        onClick={handleClick}
      >
        {children}
      </button>
       
    </div>
  )
}
