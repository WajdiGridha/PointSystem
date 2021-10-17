import React, {  useState, useEffect } from 'react'
import axios from "axios"
import 'rsuite/dist/styles/rsuite-default.min.css'
import { Form, FormGroup, FormControl, ControlLabel, ButtonToolbar, Button,  Input } from 'rsuite'
import { useHistory, useParams } from "react-router-dom";

export default function EditTask() {
  let history = useHistory();
  let {id} = useParams();
  const [users, setUsers] = useState([]); 
  const [nom, setNom] = useState('');
  const [code, setCode] = useState('');
  const [points, setPoints] = useState('');
  const [responsable, setResposable] = useState('');
  const [etat, setEtat] = useState('');
  const [description, setDescription] = useState('');

  const [data, setData] = useState([]); 
  const updateNom = (event) => { setNom(event)}
  const updatePoints = (event) => { setPoints(event)}
  const updateResponsable = (event) => {setResposable(event.target.value)}
  const updateEtat = (event) => {setEtat(event.target.value)}
  const updateDescription = (event) => {setDescription(event)}

  const handleSubmit = () => {
    const data = {
      Nom: nom,
      Code: code,
      Points:points,
      Responsable:responsable,
      Etat:etat,
      Description:description
    }
    axios.put('http://localhost:4000/taches/updatetache/'+id, data).then(res => {
      history.push("/Task");

    }).catch(err => {
      console.log(err)
    });
  }
    const fetchUsers = () => {axios.get("http://localhost:4000/users").then((response) => {setUsers(response.data);})};


    const [task, setTask] = useState([]);
    const c_url = 'http://localhost:4000/taches/tache/'+id
    const fetchTasks = () => {
        axios
            .get(c_url).then((response) => { setTask(response.data[0]); })
    };
    useEffect(() => {
        fetchTasks();
        fetchUsers();
    }, []);
    



    return (
        <div>   
                <center>
                 <Form >
                    <FormGroup>
                    <ControlLabel>Task's Name</ControlLabel>
                    <FormControl style={{ width: 300 }} name="name" placeholder={task.Nom}  onChange={(event) => updateNom(event)}/>
                    </FormGroup>
                    <FormGroup>
                    <ControlLabel>Task's Code</ControlLabel>
                    <Input style={{ width: 300 }}  placeholder={task.Code} disabled />
                    </FormGroup>
                    <FormGroup>
                    <ControlLabel>Task's User</ControlLabel>
                    <select class="form-select" aria-label="Default select example"  onChange={updateResponsable}>
                    <option selected disabled>
                      {task.Responsable}
                            </option>
                    {users && users.map((item) =>
                       <option value={item.name}>{item.name}</option> 
                      )}
                    </select>
                    </FormGroup>
                    <FormGroup>
                    <ControlLabel>Task's Status</ControlLabel>
                    <select  onChange={updateEtat}>
                            <option selected disabled>
                              {task.Etat}
                            </option>
                            <option value="validee">Done</option>
                            <option value="progress">Progress</option>
                            <option value="refused">Refused</option>
                    </select>
                    </FormGroup>
                    <FormGroup>
                    <ControlLabel>Task's Points</ControlLabel>
                    <FormControl style={{ width: 300 }} placeholder={task.Points} onChange={(event) => updatePoints(event)}/>
                    </FormGroup>
                    <FormGroup>
                    <ControlLabel>Task's Description</ControlLabel>
                    <FormControl style={{ width: 300 }} placeholder={task.Description} onChange={(event) => updateDescription(event)}/>
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
