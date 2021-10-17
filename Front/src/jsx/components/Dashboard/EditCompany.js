import React, {  useState, useEffect } from 'react'
import axios from "axios"
import 'rsuite/dist/styles/rsuite-default.min.css'
import { useHistory, useParams } from "react-router-dom";
import { Form, FormGroup, FormControl, ControlLabel, ButtonToolbar, Button, Dropdown, Input } from 'rsuite'
import AddCompany from './AddCompany';

export default function EditCompany() {
    //New UUID Set
    const  [code, setCode ] = useState("")
    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }
   const [admin, setAdmin] = useState('');
   const [isLoaded, setIsLoaded] = useState(false);
   const updateName = (event) => { setName(event) }
   const [name, setName] = useState('');
   let {id} = useParams()  
   let history = useHistory();
   const updateAdmin = (event) => { setAdmin(event.target.value)}
   const handleSubmit = async () => {
      const params = {
        Nom: name,
        Code:code ,
        SUPAD:admin
      }
    let resp = await axios.put('http://localhost:4000/societes/UpdateSociete/'+id, params);
    console.log(resp.status)
    history.push("/company");


}
const [company, setCompany] = useState([]);
const c_url = 'http://localhost:4000/societes/'+id
const fetchCompany = () => {
    axios
        .get(c_url).then((response) => { setCompany(response.data[0]); })
};
const [users, setUsers] = useState([]);
const u_url = 'http://localhost:4000/users'
const fetchUsers = () => {
    axios
        .get(u_url).then((response) => { setUsers(response.data); })
};
useEffect(() => {
   setIsLoaded(true);
   setCode(uuidv4());
   fetchCompany();
   fetchUsers();
}, []);

    return (
        <div>

         <div className="row">
            <div className="col-lg-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Company's Data</h4>
                  </div>
                  <div className="card-body">
                     <div className="form-validation">
                     <Form >
                     <FormGroup>
                    <ControlLabel>Company's Name</ControlLabel>
                    <Input style={{ width: 300 }} placeholder={company.Nom}  disabled/>
                    </FormGroup>
                    <FormGroup>
                    <ControlLabel>Company's Code</ControlLabel>
                    <Input style={{ width: 300 }} placeholder={company.Code}  disabled/>
                    </FormGroup>
                    <FormGroup>
                    <ControlLabel>Company's Admin</ControlLabel>
                    <Input style={{ width: 300 }} placeholder={company.SUPAD}  disabled/>
                    </FormGroup>
                </Form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Edit </h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                     <Form >
                    <FormGroup>
                    <ControlLabel>Company's Name</ControlLabel>
                    <FormControl style={{ width: 300 }} name="name" onChange={(event) => updateName(event)} />
                    </FormGroup>
                    <FormGroup>
                    <ControlLabel>Company's Code</ControlLabel>
                    <Input style={{ width: 300 }} placeholder={code} value={code} disabled/>
                    </FormGroup>
                    <FormGroup>
                    <select class="form-select" aria-label="Default select example" onChange={updateAdmin} >
                    {users && users.map((item) =>
                     <>
                      {item.Role == "admin" ? <option value={item.name}>{item.name}</option> : ""} 
                      </>
                      )}
                    </select>
                    </FormGroup>
                    <FormGroup>
                    <ButtonToolbar>
                        <Button appearance="primary" onClick={handleSubmit}>Submit</Button>
                        <Button appearance="default">Cancel</Button>
                    </ButtonToolbar>
                    </FormGroup>
                </Form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        </div>
    )
}
