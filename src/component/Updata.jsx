import { useLoaderData } from "react-router-dom";


const Updata = () => {
    const loadUser=useLoaderData()
    const handleUpdate=event =>{
        event.preventDefault()
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        console.log(name,email);
        const updateUser={name,email}
        fetch(`http://localhost:5000/users/${loadUser._id}`,{
            method: 'PUT',
            headers:{
                'content-type' :'application/json'
            },
            body:JSON.stringify(updateUser)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount > 0){
                alert('user update successfully')
            }
        })
        
    }
    return (
        <div>
            <h3>update information.......{loadUser.name}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadUser?.name} />
                <br />
                <input type="email" name="email" defaultValue={loadUser?.email} />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Updata;