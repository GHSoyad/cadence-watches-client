import { useEffect, useState } from "react"

// Hook to get secret token
const useToken = (email) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        if (email) {
            fetch(`https://cadence-watches-server.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.token) {
                        localStorage.setItem('cadenceSecretToken', data.token);
                        setToken(data.token);
                    }
                })
                .catch(error => console.log(error))
        }
    }, [email])

    return [token]
}

export default useToken;