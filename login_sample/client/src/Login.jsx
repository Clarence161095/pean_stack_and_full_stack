
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkIsAuth } from './App';

// return promise if user is admin return 200 with jwt token have user name and role and else return 401...
const fakeLoginFunction = async (userName) => {
    // Mock in actual app this will be check with server...
    if (userName === 'admin') {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    status: 200,
                    data: {
                        name: 'admin',
                        role: 'admin'
                    }
                });
            }, 1000);
        });
    } else {
        return new Promise((_, reject) => {
            setTimeout(() => {
                reject({
                    status: 401,
                    message: 'Unauthorized'
                });
            }, 1000);
        });
    }
}

// getInfo from server is function get your info
const getInfoFromServer = async () => {
    // Mock in actual app this will be check with server...
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                status: 200,
                data: {
                    name: 'admin',
                    role: 'admin'
                }
            });
        }, 1000);
    });
}

function Login({ setIsAuth }) {
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (checkIsAuth()) {
            setIsAuth(true);
            navigate('/protected');
        } else {
            getInfoFromServer().then((response) => {
                localStorage.setItem('user', JSON.stringify(response.data));
                setIsAuth(true);
                navigate('/protected');
            }).catch((error) => {
                console.error(error);
                localStorage.removeItem('user');
            })
        }
    }, []);

    const handleLogin = () => {
        // ...existing code...
        fakeLoginFunction(userName)
            .then((response) => {
                localStorage.setItem('user', JSON.stringify(response.data));
                setIsAuth(true);
                navigate('/protected');
            })
            .catch((error) => {
                console.error(error);
            });
        navigate('/protected');
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;