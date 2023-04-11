import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import axios from "axios";
import { Alert, AlertTitle } from '@mui/material';

const Add = () => {
    const [success, setSuccess] = useState(0);

    const [photo, setPhoto] = useState(null);
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [adress, setAdress] = useState("");
    const [email, setEmail] = useState("");
    const [naissance, setNaissance] = useState("");
    const [description, setDescription] = useState("");


const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", photo);
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("address", adress);
    formData.append("email", email);
    formData.append("birthday", naissance);
    formData.append("description", description);

  try {
    const response = await axios.post("http://127.0.0.1:5000/add_person", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setSuccess(1);

    setTimeout(() => {
        setSuccess(0);
    }, 5000)
    console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};


    return (
        <>
        <div className="container">
            <div className="titre u-center">Sauvegarde des données</div>
            <form className='form'>
                <div className='label'>
                    <label>Photo</label>
                </div>
                <div className="input">
                    <input accept="image/*" type="file" name="photo" onChange={(event) => setPhoto(event.target.files[0])} required/>
                </div>
                <div className='label'>
                    <label>Nom</label>
                </div>
                <div className="input">
                    <input type="text" name="last_name" value={last_name} onChange={(event) => setLast_name(event.target.value)} required/>
                </div>
                <div className='label'>
                    <label>Prenoms</label>
                </div>
                <div className="input">
                    <input name="first_name" value={first_name} onChange={(event) => setFirst_name(event.target.value)} type="text" required/>
                </div>
                <div className='label'>
                    <label>Adresse</label>
                </div>
                <div className="input">
                    <input type="text" name="adress" value={adress} onChange={(event) => setAdress(event.target.value)} required/>
                </div>
                <div className='label'>
                    <label>Email</label>
                </div>
                <div className="input">
                    <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required/>
                </div>
                <div className='label'>
                    <label>Naissance</label>
                </div>
                <div className="input">
                    <input type="date" name="naissance" value={naissance} onChange={(event) => setNaissance(event.target.value)}/>
                </div>
                <div className='label'>
                    <label>Description</label>
                </div>
                <div className="input">
                    <textarea name="description" value={description} onChange={(event) => setDescription(event.target.value)} required></textarea>
                </div>
                <Button variant='contained' color='primary' id='button' onClick={handleSubmit}>Sauvegarder</Button>
            </form>   
            <div className="message_success">
            {success === 0 && (<></>)}
            {success === 1 && (
                <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    Sauvegarder sainement dans la base de donnée — <strong>check it out!</strong>
                </Alert>
            )}
            {success === 3 && (
                <Alert severity='error'>
                    <AlertTitle>Error</AlertTitle>
                    Il faut remplir toutes les formes <strong>check it out!</strong>
                </Alert>
            )}
        </div>
        </div>
        </>
    );
}

export default Add;