import { useEffect, useState } from "react";
import { useFacade } from "./+state/facade";

export default function Announcement() {
  useFacade()
  return (
    <div className="w-full">
      <ShowRole />
    </div>
  )
}

function useHandleCheckAuth() {
  const [isAuth, setIsAuth] = useState(false)
  const [id, setId] = useState("")
  useEffect(() => {
    fetch("http://localhost:5674/auths/" + id).then(res => res.json()).then(res => {
      setIsAuth(res.isAuth)
    }).catch(err => {
      console.log(err)
    })
  }, [id]);

  return {
    isAuth,
    setId
  }
}

function useHandleGetRole() {
  const [role, setRole] = useState("user")
  const [id, setId] = useState("")

  useEffect(() => {
    fetch("http://localhost:5674/roles/" + id).then(res => res.json()).then(res => {
      setRole(res.role)
    }).catch(err => {
      console.log(err)
    })
  }, [id]);

  return {
    role,
    setId,
  }
}

function ShowRole() {
  const roleData = useHandleGetRole()
  const authData = useHandleCheckAuth()

  function setId(id) {
    roleData.setId(id)
    authData.setId(id)
  }

  return (
    <div className="w-full">
      {roleData.role}
      <br />
      {authData.isAuth}
      <br />
      <input type="text" onChange={(e) => setId(e.target.value)} />
    </div>
  )
}