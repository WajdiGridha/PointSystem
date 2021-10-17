import React, {  useState, useEffect, useContext } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap';
import  { LoginContext } from "../../../context/LoginContext";



const Company = () => {

  const login = useContext(LoginContext);
  const {role, setUserRole} = login
  const [companies, setCompanies] = useState([]); 
  const c_url = 'http://143.110.210.169:4000/societes/'
  const fetchCompanies = () => {  
    axios
      .get(c_url).then((response) => {setCompanies(response.data);})

  };
  const handleDelete = (_id) => {
    axios.delete(`${c_url}/${_id}`).then(res => {
      const del = companies.filter(item => _id !== item._id)
      setCompanies(del)
  })
}


  useEffect(() => {
     fetchCompanies();
  }, []);

  return (
    <>
      <div className='form-head d-flex mb-3 mb-md-5 align-items-center '>
        <div className='input-group search-area d-inline-flex'>
          <div className='input-group-append'>
            <span className='input-group-text'>
              <i className='flaticon-381-search-2' />
            </span>
          </div>
          <input
            type='text'
            className='form-control'
            placeholder='Search here'
          />
        </div>
        <Link
          className='ml-auto rounded-0 btn bgl-primary text-primary'
          to='/AddCompany'
        >
          Add Company
        </Link>
       
      </div>
      <div className='row'>
        <div className='col-xl-12'>
          <div className='table-responsive table-hover fs-14'>
            <div id='transaciton' className='dataTables_wrapper no-footer'>

            <Table striped bordered hover size="sm">
              <thead> 
                <tr>
                  <th>ID</th>
                  <th>Company Name</th>
                  <th>Super Admin</th>
                  <th>Creation Date</th>
                  <th>Actions</th>  
                </tr>
              </thead>
              <tbody>
              {companies && companies.map((item) =>
                     <>
                <tr>
                  <td>{item._id}</td>
                  <td>{item.Nom}</td>
                  <td>{item.SUPAD}</td>
                  <td>{item.createdAt}</td>
                  <td>
                  <span>
                    <Link to={`/EditCompany/${item._id}`}>
                    <a  > <i className="fa fa-pencil" style={{backgroundColor:"#6418C3",color:"white",width:"25px",height:"25px",padding:"6px",marginRight:"5px"}}></i> </a> 
                    </Link>
                   <a onClick={()=> handleDelete(`${item._id}`)}> <i className="fa fa-trash" style={{backgroundColor:"red",color:"white",width:"25px",height:"25px",padding:"6px",marginRight:"5px"}}></i> </a>
                  </span>
                  </td>
                </tr>
                </>
                    )}
              </tbody>
            </Table>

            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default Company
