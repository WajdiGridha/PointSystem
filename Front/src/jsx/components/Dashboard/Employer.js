import React, {  useState, useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap';
export default function Employer() {
   
   
  const [users, setUsers] = useState([]); 
  const c_url = 'http://localhost:4000/users/'
  const fetchUsers = () => {  
    axios
      .get(c_url).then((response) => {setUsers(response.data);})
  };
  const handleDelete = (_id) => {
    axios.delete(`${c_url}/${_id}`).then(res => {
      const del = users.filter(item => _id !== item._id)
      setUsers(del)
  })
}


  useEffect(() => {
     fetchUsers();
  }, []);

   
   
   
   
   
   
   
   
   
    return (
        <div>
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
          to='/AddEmployer'
        >
          Add Employer
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
                  <th> Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Apartment</th>
                  <th>Actions</th>  
                </tr>
              </thead>
              <tbody>
              {users && users.map((item) =>
                     <>
                <tr>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.apartment}</td>
                  <td>
                  <span>
                    <Link to={`/EditEmployer/${item._id}`}>
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
        </div>
    )
}
