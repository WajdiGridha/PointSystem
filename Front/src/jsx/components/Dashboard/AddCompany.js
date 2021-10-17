import React, {  useState, useEffect } from 'react'
import axios from "axios"
import 'rsuite/dist/styles/rsuite-default.min.css'
import { Form, FormGroup, FormControl, ControlLabel, ButtonToolbar, Button,  Input } from 'rsuite'
import { useHistory } from "react-router-dom";

export default function AddCompany() {
  let history = useHistory();
  const [users, setUsers] = useState([]); 
  const [nom, setNom] = useState('');
  const [code, setCode] = useState('');
  const [supad, setSupad] = useState('');

  const [data, setData] = useState(null);
  const updateNom = (event) => { setNom(event);console.log(nom) }
  const updateSupad = (event) => { setSupad(event);console.log(nom) }

  const handleSubmit = () => {
    const data = {
      Nom: nom,
      Code: code,
      SUPAD:supad
    }
    axios.post('http://localhost:4000/societes/create', data).then(res => {
      setData(res.data);
      history.push("/company");

    }).catch(err => {
      console.log(err)
    });
  }
    const fetchUsers = () => {axios.get("http://localhost:4000/users").then((response) => {setUsers(response.data);})};
    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }
      const [isLoaded, setIsLoaded] = useState(false);
      useEffect(() => {
        setIsLoaded(true);
        setCode(uuidv4());
        fetchUsers();
    }, []);

  
    



    return (
        <div>   
                <center>
                 <Form >
                    <FormGroup>
                    <ControlLabel>Company's Name</ControlLabel>
                    <FormControl style={{ width: 300 }} name="name" value={nom} onChange={(event) => updateNom(event)}/>
                    </FormGroup>
                    <FormGroup>
                    <ControlLabel>Company's Code</ControlLabel>
                    <Input style={{ width: 300 }} placeholder={code} value={code} disabled />
                    </FormGroup>
                    <FormGroup>

                    <select class="form-select" aria-label="Default select example" value={supad} onChange={(event) => updateSupad(event)}>
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
                        <Button appearance="default"  >Cancel</Button>
                    </ButtonToolbar>
                    </FormGroup>
                </Form>
                </center>
        </div>
    )
}
