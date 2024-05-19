import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { axiosToken } from '../../../config';

const Login = () => {
    let navigate = useNavigate();
    const [password, setPassword] = useState('0lelplR');
    const [username, setUsername] = useState('kminchelle');
    const [loading, setLoading] = useState(false);

    const handleLogin = e => {
        e.preventDefault()
        let user = { username, password }
        setLoading(true)

        axiosToken.post('/auth/login', user)
            .then(res => {
                console.log(res.data)
                localStorage.setItem("x-auth-token", res.data.token)
                navigate("/admin/create")
            })
            .catch(err => {
                console.log(err);
                toast.error("username or password is incorrect")
            })
            .finally(() => setLoading(false))
    }

    return (
        <div className="login-div w-[1534px] h-[100vh] py-32 bg-gray-300">
            <div className="login w-[500px] mx-auto py-5 flex flex-col items-center justify-center gap-8 border-2 rounded-lg shadow-md">
                <h2 className='text-3xl font-semibold text-black'>Login</h2>
                <form onSubmit={handleLogin} className="w-[350px] grid grid-cols-1 gap-3">
                    <input
                        className='input input-secondary border-2 text-black font-semibold bg-white'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        placeholder='username' />
                    <input
                        className='input input-primary border-2 text-black font-semibold bg-white'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="password" />
                    <button disabled={loading} type='submit' className='btn btn-outline text-lg text-black'>
                        {loading ? "Loading..." : "Next"}
                    </button>
                </form>
                <div className="w-[350px] flex items-center justify-between gap-4">
                    <button onClick={() => navigate("/")} className='btn font-bold w-[100px] btn-info'>Go Home</button>
                    <button onClick={() => navigate(-1)} className='btn font-bold w-[100px] btn-info'>Go Back</button>
                </div>
            </div>
        </div>
    )
}

export default Login