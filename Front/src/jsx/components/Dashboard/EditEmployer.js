import { useParams, useHistory } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import axios from "axios"
import 'rsuite/dist/styles/rsuite-default.min.css'
import { Form, FormGroup, FormControl, ControlLabel, ButtonToolbar, Button } from 'rsuite'

export default function EditEmployer() {


    let history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [apartment, setApartment] = useState('');
    const [zip, setZip] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [street, setStreet] = useState('');
    const [societe, setSociete] = useState('');
    const [companies, setCompanies] = useState('');


    const updateName = (event) => { setName(event) }
    const updateEmail = (event) => { setEmail(event)}
    const updatePhone = (event) => { setPhone(event)}
    const updateApartment = (event) => { setApartment(event)}
    const updateZip = (event) => { setZip(event)}
    const updateCountry = (event) => { setCountry(event)}
    const updateCity = (event) => { setCity(event)}
    const updateStreet = (event) => { setStreet(event)}
    const updatePassword = (event) => { setPassword(event)}
    const updateRole= (event) => { setRole(event.target.value);console.log(event.target.value)}
    const updateCompany= (event) => { setSociete(event.target.value);console.log(event.target.value)}

    const handleSubmit = async () => {

            const params = {
                name: name,
                email: email,
                phone: phone,
                apartment: apartment,
                zip: zip,
                country: country,
                street: street,
                city: city,
                password: password,
                Role: role,
                societe: societe
              }
            
            //var  id = useParams();

            //console.log(id);

            //return false;

            let resp = await axios.put(`http://localhost:4000/users/${id}`, params);
            history.push("/Employers");
    
            console.log(resp.status)


    }

    let {id} = useParams()
    const [data, setData] = useState('');
    //console.log(id)
    const fetchCompanies = () => {axios.get("http://localhost:4000/societes").then((response) => {setCompanies(response.data);})};
    const [user, setUser] = useState([]);
    const u_url = 'http://localhost:4000/users/'+id
    const fetchUser = () => {
        axios
            .get(u_url).then((response) => { setUser(response.data)})
    };
    useEffect(() => {
        fetchCompanies();
        fetchUser();
        console.log(data)
    }, []);



    return (
            <div>
            <center>
                <Form style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <div >
                    <FormGroup>
                        <ControlLabel>Employer Name</ControlLabel>
                        <FormControl style={{ width: 300 }} placeholder={user.name}  onChange={(event) => updateName(event)} />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Employer Email</ControlLabel>
                        <FormControl style={{ width: 300 }} name="email" placeholder={user.email} onChange={(event) => updateEmail(event)} />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Employer Phone</ControlLabel>
                        <FormControl style={{ width: 300 }} name="phone" placeholder={user.phone} onChange={(event) => updatePhone(event)} />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Employer Apartment</ControlLabel>
                        <FormControl style={{ width: 300 }} name="apartment" placeholder={user.apartment} onChange={(event) => updateApartment(event)} />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Employer Zip Code</ControlLabel>
                        <FormControl style={{ width: 300 }} name="zip" placeholder={user.zip} onChange={(event) => updateZip(event)} />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Employer City</ControlLabel>
                        <FormControl style={{ width: 300 }} name="city" placeholder={user.city} onChange={(event) => updateCity(event)} />
                    </FormGroup>
                    </div>
                    <div style={{marginLeft:'50px'}}>
                    <FormGroup>
                        <ControlLabel>Employer Street</ControlLabel>
                        <FormControl style={{ width: 300 }} name="street" placeholder={user.street} onChange={(event) => updateStreet(event)} />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Employer Country</ControlLabel>
                        <FormControl style={{ width: 300 }} name="country" placeholder={user.country} onChange={(event) => updateCountry(event)} />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Employer Password</ControlLabel>
                        <FormControl style={{ width: 300 }} name="password" placeholder={user.password} onChange={(event) => updatePassword(event)} />
                    </FormGroup>
                    <FormGroup>
                    <ControlLabel>Employer Role</ControlLabel>
                    <select  onChange={updateRole}>
                            <option selected disabled>
                            {user.Role}
                            </option>
                            <option value="admin">admin</option>
                            <option value="SuperAdmin">SuperAdmin</option>
                            <option value="user">User</option>
                    </select>
                    </FormGroup>
                    <FormGroup>
                    <ControlLabel>Employer Company</ControlLabel>
                    <select  onChange={updateCompany}>
                            <option selected disabled>
                            {user.societe}
                            </option>
                            {companies && companies.map((item) => <option value={item.Nom}>{item.Nom}</option>)}
                    </select>
                    </FormGroup>

                    <FormGroup>
                        <ButtonToolbar>
                            <Button appearance="primary" onClick={handleSubmit}>Submit</Button>
                            <Button appearance="default"  >Cancel</Button>
                        </ButtonToolbar>
                    </FormGroup>
                    </div>
                </Form>
            </center>
        </div>
    )
}
