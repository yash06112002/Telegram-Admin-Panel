import React, { useEffect, useState } from 'react'
// import { useStateValue } from '../StateProvider';
import "../styles/Panel.css";

const Panel = () => {
    const [input, setInput] = useState("");
    // const [{ user }, dispatch] = useStateValue();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://nestjs-api-rzr3.onrender.com" + "/users")
            .then(res => { return res.json() })
            .then(data => {
                setUsers(data)
            })
    }, [])

    const addUser = async () => {
        fetch("https://nestjs-api-rzr3.onrender.com/users", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: input,
            })
        })
            .then(async (response) => {
                const res = await response.json();

                setInput("")
                setUsers(res)
            });
    }
    const togglePermission = async (e) => {
        e.preventDefault();

        // console.log(e.target.id);
        fetch("https://nestjs-api-rzr3.onrender.com/users/toggle/" + e.target.id, {
            method: "post",
        })
            .then(async (response) => {
                const res = await response.json();
                setUsers(res)
            });
    }

    const deleteUser = async (e) => {
        e.preventDefault();

        fetch("https://nestjs-api-rzr3.onrender.com/users/" + e.target.id, {
            method: "delete",
        })
            .then(async (response) => {
                const res = await response.json();
                setUsers(res)
            });
    }
    return (
        <>
            <div>
                {
                    users.map(user => (
                        <div key={user.id}>
                            <p key={user.name} className={user.isAllowed ? 'user' : 'blockedUser'}>{user.name ? user.name : "no name"}</p>
                            <button id={user.id} onClick={togglePermission}>Toggle Permission</button>
                            <button id={user.id} onClick={deleteUser}>Delete</button>
                        </div>
                    ))
                }
            </div>
            <input value={input} onChange={e => setInput(e.target.value)} type='text' placeholder='Type A Message' />
            <button onClick={addUser}>Add User</button>
        </>
    )
}

export default Panel