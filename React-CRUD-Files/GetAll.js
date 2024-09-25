// import { useNavigate} from "react-router-dom";
// import { Link } from "react-router-dom";
// const { useEffect } = require("react");
// const { useState } = require("react");

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

// export default GetAll;