import  React, { useEffect, useState } from 'react';
import AdminPage from '../pages/AdminPage'
import UserInfo from '../components/UserPage/UserInfo';
import axios from 'axios';

export default function UserPage() {

  const [isAdmin, setIsAdmin] = useState(false);
  const [users, setUsers] = useState([])

  // Funzione per impostare isAdmin su true se l'utente è un amministratore
  const handlePower = useEffect(() => {
    const apiUsers = 'http://127.0.0.1:8000/api/user/all' 
    axios.get(apiUsers).then((response) => {
      setUsers(response.data)

  })
  .catch((error) => {
      console.error("Zio pera")
  });
  }, []);


  return (
    <div>
      {isAdmin ?
        <AdminPage user={"harlockOfficial"}/>
      :
        <UserInfo user={users[3]} />           
      }
    </div>
    
    
  )
}
