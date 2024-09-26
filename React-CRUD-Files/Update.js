import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// const Update = () => {
//   const [data, setData] = useState({});
//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch(`http://localhost:7000/home/${id}`)
//       .then((res) => res.json())
//       .then((res) => setData(res));
//   }, [id]);

//   return (
//     <>
//       <div className="container form-control">
//         <label>ID</label>
//         <input
//           type="text"
//           value={data.id}
//           disabled
//         />

//         <label>Name</label>
//         <input
//           type="text"
//           value={data.name}
//           onChange={(e) => {
//             setData({ ...data, name: e.target.value });
//           }}
//         />

//         <label>Phone</label>
//         <input
//           type="text"
//           value={data.phone}
//           onChange={(e) => {
//             setData({ ...data, phone: e.target.value });
//           }}
//         />

//         <button
//           onClick={() => {
//             fetch("http://localhost:7000/home/update/" + id, {
//               method: "PATCH",
//               body: JSON.stringify(data),
//               headers: {
//                 "Content-Type": "application/json",
//               },
//             })
//               .then((res) => res.json())
//               .then(()=> navigate("/home"));
//           }}
//         >
//           Save
//         </button>
//       </div>
//     </>
//   );
// };


// export default Update;


const Update = ()=>{
    const [data, setData] = useState({});

    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`http://localhost:7000/home/${id}`)
        .then((res)=>res.json())
        .then((res)=>setData(res))
    },[])

    return(

        <>
            <div>
                <input
                disabled
                type="text"
                value={data.id}
                onChange={(e)=>{
                    setData({...data, id: e.target.value})
                }}
                />

                <input 
                type="text"
                value={data.name}
                onChange={(e)=>{
                    setData({...data, name: e.target.value})
                }}
                />

                <input 
                value={data.phone}
                type="text"
                onChange={(e)=>{
                    setData({...data, phone: e.target.value})
                }}
                />

                <button 
                className="btn btn-warning"
                onClick={()=>{
                    fetch('http://localhost:7000/home/update/'+ id, {
                        method: 'PATCH',
                        body: JSON.stringify(data),
                        headers:{
                            "Content-Type":"application/json"
                        }
                    })
                    .then((res) => res.json())
                    .then(() => navigate('/home'))
                }}
                >Edit Data</button>

            </div>
        </>
    )
}

export default  Update;