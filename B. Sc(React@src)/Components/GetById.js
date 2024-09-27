import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const GetById = ()=>{
    
    const [data, setData] = useState({});

    const params = useParams();
    
    useEffect(()=>{
        fetch('http://localhost:7000/home/' + params.id)
        .then((res)=> res.json())
        .then((data) => setData(data))
    }, [params.id])

    return(
        <>
            <div className="container border border-2 border-info col-3">
                <p>{data.id}</p>
                <p>{data.name}</p>
                <p>{data.phone}</p>
                <Link className="btn btn-dark m-1" to={'/home'}>Back</Link>
            </div>
        </>
    )
}
export default GetById;

