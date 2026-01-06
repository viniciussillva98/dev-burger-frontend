
import { useState, useContext, createContext, useEffect } from "react"

const UserContext = createContext({})

export const UserProvider = ({ children }) => {

    const [userInfo, setUserInfo] = useState({})

    const putUserData = (Information) => {
        setUserInfo(Information)
        localStorage.setItem("devburger:userData", JSON.stringify(Information))
    }

    const logout = () => {
        setUserInfo({})
        localStorage.removeItem("devburger:userData")
    }

    useEffect(() => {
        const info = localStorage.getItem("devburger:userData")
        if (info) {
            setUserInfo(JSON.parse(info))
        }
    }, [])

    return (
        <UserContext.Provider value={{ userInfo, putUserData, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error("useUser is invalid")
    }
    return context
}