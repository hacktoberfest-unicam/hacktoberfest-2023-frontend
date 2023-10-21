import React, {useEffect, useState} from 'react';
import AdminPage from '../pages/AdminPage'
import UserInfo from '../components/UserPage/UserInfo';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function UserPage() {

    const [isAdmin, setIsAdmin] = useState(true);
    const [users, setUsers] = useState([])

    // Funzione per impostare isAdmin su true se l'utente è un amministratore
    const handlePower = useEffect(() => {
        const apiUsers = `${process.env.REACT_APP_BACKEND_URL}api/user/all`
        axios.get(apiUsers).then((response) => {
            setUsers(response.data)

        }).catch((error) => {
                console.error("Zio pera")
        });
        console.log(Cookies.get('authorization'))
    }, []);


    return (<div>
            {isAdmin ? <AdminPage user={"harlockOfficial"}/> : <UserInfo user={users[1]}/>}
        </div>


    )
}
