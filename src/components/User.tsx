import React from 'react'
import { useState } from 'react'

//interfaces son reglas para setear a los objetos
interface User {
  uid: string,
  name: string,
}

const tempUser: User = {
  uid: 'XYZ',
  name: 'Juan Perez'
}

export const User = () => {
  const [user, setUser] = useState<User>();
  const login = () => {
    setUser({
      uid: 'ABC123',
      name: 'Hector Herrera'
    });
  }
  return (
    <div className="mt-5">
      <h3>User: useState</h3>
      <button onClick={login} className="btn btn-outline-primary">
        Login
      </button>
      {
        (!user) ? <pre>No hay usuario</pre> : <pre>{JSON.stringify(user)}</pre>
      }
    </div>
  )
}
