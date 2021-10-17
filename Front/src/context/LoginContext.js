import React, { useState, createContext} from "react";

export const LoginContext = createContext();

export default function LoginContextProvider(props) {
const [role, setRole] = useState('')
const [token, setToken] = useState('')
const [namex, setNamex] = useState('')

const setUserToken = (value) => {
    setToken(value)
}
const setUserRole = (value) => {
    setRole(value)
}
const setUserName = (value) => {
    setNamex(value)
}

const rest = {
    role: role,
    setUserRole: setUserRole,
    token: token,
    setUserToken: setUserToken,
    namex: namex,
    setUserName: setUserName
}

  return (
      <LoginContext.Provider value={rest}>
          {props.children}
      </LoginContext.Provider>
  );
}
