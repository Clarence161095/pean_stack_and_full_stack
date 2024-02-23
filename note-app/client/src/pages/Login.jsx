import Loading from '../components/Loading';

const useLogin = () => {
  return {};
};

function Login() {
  const { handleLoginWithGoogle, isLoading, errorMessage } = useLogin();

  if (!isLoading) {
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-col w-96 space-y-4">
            <h1 className="text-3xl font-bold text-center">Login</h1>
            {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
            {/* Second Login with Google */}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={handleLoginWithGoogle}
            >
              Login with Google
            </button>

            {/* Or register when dont have account */}
            <div className="flex justify-center">
              <p>
                {`Don't have an account? `}
                <a href="/register" className="text-blue-500">
                  Register
                </a>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <Loading />;
}

export default Login;
