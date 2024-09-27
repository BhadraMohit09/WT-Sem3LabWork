
// const GetAll = () => {

//     const appURL = 'http://localhost:7000/home/';

//     const navigate = useNavigate();

//     const [data, setData] = useState([]);

//     useEffect(() => {
//         fetch(appURL)
//             .then(response => response.json())
//             .then(data => setData(data))
//     }, []);

//     return (
//         <>
//             <div className="">
//                 {
//                     data.map((item) => {
//                         return (
//                             <>
//                                 <div className="container mb-2 border border-2 col-6">
//                                     <p>ID: {item.id}</p>
//                                     <p>Name: {item.name}</p>
//                                     <p>Phone: {item.phone}</p>
//                                     <button className="btn btn-danger m-1"
//                                     onClick={()=>{
//                                         fetch('http://localhost:7000/home/delete/' + item.id, 
//                                             {
//                                                 method: "DELETE"
//                                             }
//                                         )
//                                         .then((res) => res.json())
//                                         .then((data)=> console.log(data), navigate('/'))
//                                     }}
//                                     >
//                                     Delete
//                                     </button>
//                                     <Link className="btn btn-info" to={'/home/' + item.id}>View More</Link>
//                                 </div>
//                             </>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }

// export default GetAll;


import { useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
const { useEffect } = require("react");
const { useState } = require("react");

const GetAll = ()=>{
    
    const [data, setData] = useState([]);

    const navigate = useNavigate();
    
    const appURL = 'http://localhost:7000/home/';

    useEffect(()=>{
        fetch(appURL)
        .then((res)=> res.json())
        .then((res)=> setData(res))
    },[]);

    return(
        <>
            <h1>GetAll</h1>
            <Link to={'/home/add'} className="btn btn-dark">Add Items</Link>
            <div>
                {
                    data.map((item)=>{
                        return(
                            <>
                                <div className="container m-3 border border-3 text-danger border-info">
                                <p>{item.name}</p>
                                <p>{item.phone}</p>
                                <Link className="btn btn-info m-1" to={'/home/' + item.id}>View More</Link>
                                
                               <button 
                               className="btn btn-danger m-2"
                               onClick={()=>{
                                fetch('http://localhost:7000/home/delete/' + item.id, {
                                    method: 'DELETE'
                                })
                                .then((res) => res.json())
                                .then(()=> navigate('/'))
                               }}
                               >DELETE</button>

                               <Link to={'/home/update/' + item.id} className="btn btn-info">Edit</Link>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}


export default GetAll;