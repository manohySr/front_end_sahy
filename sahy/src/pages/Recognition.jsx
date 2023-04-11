import React, { useState } from 'react';


import { Button, Divider } from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone';
import Lottie from 'react-lottie';

import animationData from '../assests/lotties/app.json';
import videData from '../assests/lotties/vide.json';
import noneData from '../assests/lotties/none.json';

import loading from '../assests/lotties/loading.json';
import axios from 'axios';


const options1 = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const options2 = {
    loop: true,
    autoplay: true,
    animationData: videData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const options3 = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const options4 = {
    loop: true,
    autoplay: true,
    animationData: noneData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};




const Recognition = () => {
    const [file, setFile] = useState(null);
    const [person, setPerson] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    let data = new FormData();
    data.append('file', file);
    
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:5000/recognition',
        headers: { 

        },
        data : data
    };
  
    const handleChange = (file) => {
      if (file[0] !== undefined){
        setFile(file[0]);
      } 
    }

    const handleSubmit = async () => {
        setIsLoading(true)
        const result = await axios.request(config)
        const person = result.data
        setIsLoading(false)
        setPerson(person)
        // console.log("hello")
    }
    return (
        <>
            <div className="main_app__recognition">
                <DropzoneArea
                    acceptedFiles={['image/*']}
                    dropzoneText={"Drag and drop a single image here or click"}
                    onChange={(e) => handleChange(e)}
                    filesLimit={1}
                />
                <Button variant='contained' color='primary' onClick={handleSubmit}>Rechercher</Button>
            </div>
            <Divider orientation="vertical" flexItem></Divider>
            <div className="main_app__information relative">
                {
                person ? (
                <>
                {
                    isLoading ? (
                        <>
                        <div className="lottie--loading"><Lottie options={options3} width="300px" /></div>
                        </>
                    ) : 
                    (
                    <>
                        <div className="titre">Resultat de Recherche</div>
                        {
                            person.message === "Cette personne n' est pas dans la base de donnée" ? (
                                <>
                                <div className="lottie--none"><Lottie options={options4} width="300px" /></div>
                                </>
                            ) : (
                                <>
                                <div className="lottie"><Lottie options={options1} width="300px" /></div>
                                <div className="main_app__information__info">
                                    <img src={`data:${person.mime_type};base64,${person.filename}`} className="main_app__information__info__img" />
                                    <div className="main_app__information__info__essentiel">
                                        <div className="lastname"><span>Nom:</span> {person.last_name}</div>
                                        <div className="firstname"><span>Prenom(s):</span> {person.first_name}</div>
                                        <div className="birthday"><span>Naissance:</span> {person.birthday}</div>
                                        <div className="adress"><span>Adresse:</span> {person.address}</div>
                                        <div className="email"><span>email:</span> {person.email}</div>
                                    </div>
                                </div>
                                <div className="main_app__information__description">
                                    <span>Description:</span> <br></br>
                                    <div className='main_app__information__description__text'>
                                        {person.description}
                                    </div>
                                </div>
                                </>
                            )
                        }
                    </>
                    )
                }
                </>
                ) : (
                    <>
                    {
                        isLoading ? (
                        <>
                            <div className="lottie--loading"><Lottie options={options3} width="300px" /></div>
                        </>
                            ) : 
                            (
                        <>
                            <div className="lottie--vide"><Lottie options={options2} width="400px" /></div>
                        </>
                            )
                        }
                    </>
                    )
                }
            </div>
        </>
    );
}

export default Recognition;
