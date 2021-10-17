import React, {  useState, useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap';

export default function Task() {

  const [tasks, setTasks] = useState([]); 
  const c_url = 'http://143.110.210.169:4000/taches/'
  const fetchTasks = () => {axios.get(c_url).then((response)=>{setTasks(response.data);})};
  const handleDelete = (_id) => {
    axios.delete(`${c_url}/deletetaches/${_id}`).then(res => {
      const del = tasks.filter(item => _id !== item._id)
      setTasks(del)
  })
}
  useEffect(() => {
     fetchTasks();
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
          to='/AddTask'
        >
          Add Task
        </Link>
       
      </div>
      <div className='row'>
        <div className='col-xl-12'>
          <div className='table-responsive table-hover fs-14'>
            <div id='transaciton' className='dataTables_wrapper no-footer'>

            <Table striped bordered hover size="sm">
              <thead> 
                <tr>
                  <th>Name</th>
                  <th>Points</th>
                  <th>Admin</th>
                  <th>Creation Date</th>
                  <th>Actions</th>  
                </tr>
              </thead>
              <tbody>
              {tasks && tasks.map((item) =>
                     <>
                <tr>
                  <td>{item.Nom}</td>
                  <td>{item.Points}</td>
                  <td>{item.Responsable}</td>
                  <td>{item.createdAt}</td>
                  <td>
                  <span>
                    <Link to={`/EditTask/${item._id}`}>
                    <a  > <i className="fa fa-pencil" style={{backgroundColor:"#6418C3",color:"white",width:"25px",height:"25px",padding:"6px",marginRight:"5px"}}></i> </a> 
                    </Link>
                   <button onClick={()=> handleDelete(`${item._id}`)}> <i className="fa fa-trash" style={{backgroundColor:"red",color:"white",width:"25px",height:"25px",padding:"6px",marginRight:"5px"}}></i> </button>
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
