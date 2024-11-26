import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {
    const loadUser=useLoaderData()
    const [users,setUsers]=useState(loadUser)
     
    const handlelDelete=_id=>{
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`,{
            method:'DELETE'
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.deletedCount > 0){
                alert('deleted successfully')
                const remaining=users.filter(user =>user._id !==_id)
                setUsers(remaining)
            }
        })
        
    }
        return (
        <div>
            <h2>users{users.length}</h2>
            <div>
                {
                    users.map(user => <p key={user._id}>
                         {user.name} ...{user.email}...{user._id}
                         <Link to={`/update/${user._id}`}>
                         <button>update</button>
                         </Link>
                          <button onClick={()=>handlelDelete(user._id)}>Del</button>
                           </p>)
                }
            </div>
        </div>
    );
};

export default Users;