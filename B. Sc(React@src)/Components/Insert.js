import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Insert = ()=>{

    
    const [data, setData] = useState([]);

    const navigate = useNavigate();
    return(
        <>
            <div className="container form-control">
                <label>ID</label>
                <input 
                type="text"
                onChange={(e)=>{
                    setData({...data, id:e.target.value})
                }}
                />

                <label>Name</label>
                <input 
                type="text"
                onChange={(e)=>{
                    setData({...data, name: e.target.value})
                }}
                />

                <label>Phone</label>
                <input 
                type="text"
                onChange={(e)=>{
                    setData({...data, phone: e.target.value})
                }}
                />

                <button
                className="btn btn-info m-1"
                onClick={()=>{
                    fetch('http://localhost:7000/home/add', {
                        method: 'POST',
                        headers: {
                            "Content-Type":"application/json"
                        },
                        body: JSON.stringify(data)
                    })
                    .then(()=> navigate('/home'))
                }}
                >Submit</button>
            </div>
        </>
    )
}

export default Insert;

