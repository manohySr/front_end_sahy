import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assests/lotties/96417-processing-face-recognition.json';
import image from '../assests/user.png';
import { Link } from "react-router-dom";

const options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};


const developpeur = {'name': 'Manohy RAJAONAH', 'degree': 'Master 1 STM-TCO', 'titre': 'Software Engineer'};
const tabs = [1,2,3,4,5,6,7,8];

const Home = () => {
    return (
        <>
        <header className="header">
            <div className="header__box row">
                <div className="header__logo">Sahy</div>
                <nav className="navigation row">
                    <li><a href='#about'>A propos</a></li>
                    <li><a href='#developper'>Nos developpeurs</a></li>
                    <li><a href='#contact'>Contacts</a></li>
                </nav>
            </div>
            <div className="heading-primary">
                <div className="heading-primary--main">
                    Facesahy'all
                </div>
                <div className="heading-primary--sub">
                    est la pour faciliter votre recherche
                </div>
                <Link to="/apk" className="btn btn--white btn--animated">Faire le test</Link>
            </div>
        </header> 

        <section className="section-about">
            <div className="heading-secondary u-margin-left-10" id='about'>
                Qui suis je ?
            </div>
            <div className="row">
                <div className="col-1-of-2 u-margin-left-10 u-margin-top-5">
                    <div className="heading-tertiary u-margin-bottom-1">Comment l'idée est née ?</div>
                    <p className="paragraph u-margin-bottom-2">
                    J'ai été développé par des étudiants de l'ESPA de la mention telecommunication. 
                    L'idée est née le 21 mars 2023 
                    lors du brainstorming d'un concours de mini-projet organisé par GET 2023. L'equipe qui ma crée est Sahy.
                    Un des equipes participants du concours.

                    </p>
                    <div className="heading-tertiary u-margin-bottom-1">Qu'est-ce que je fais ?</div>
                    <p className="paragraph u-margin-bottom-2">
                    Facesahy'all est une application web de reconnaissance faciale, qui peut être 
                    intégrer dans n'importe quelle organisation. Je suis à votre disposition à tout
                    moment.
                    </p>
                    <a href="#" className="btn-text">Apprendre plus &rarr;</a>
                </div>
                <div className="col-1-of-2">
                    <Lottie options={options} width="400px" />
                </div>
            </div>
        </section>  

        <section className="section-developpeur">
            <div className='u-center'>
                <div className="heading-secondary--light" id="developper">Nos developpeurs</div>
            </div>
            <div className="container__developpeur wrap">
            {
                tabs.map(tab => {
                    return (
                        <>
                        <div className="developpeur">
                            <img src={image} alt="" className="developpeur__image" />
                            <div className="developpeur__description">
                                <span className="developpeur__description__nom">{developpeur.name},</span>
                                <span className="developpeur__description__degree">{developpeur.degree}</span>
                                <span className="developpeur__description__titre">{developpeur.titre}</span>
                                <span className="developpeur__emoji">🌟</span>
                            </div>
                        </div>
                        </>
                    )
                })
            }
            </div>
            <div className="u-one-div-center u-center">
                <div className="developpeur">
                    <img src={image} alt="" className="developpeur__image" />
                    <div className="developpeur__description">
                        <span className="developpeur__description__nom">{developpeur.name},</span>
                        <span className="developpeur__description__degree">{developpeur.degree}</span>
                        <span className="developpeur__description__titre">{developpeur.titre}</span>
                        <span className="developpeur__emoji">🌟</span>
                    </div>
                </div>
            </div>
        </section>

        <section className="section-contact">
            <div className="u-one-div-center">
                <form className="contact" id='contact'>
                    <div className="contact-container">
                        <div className="other-contact">
                            <div className="heading-tertiary">Notre adresse</div>
                            <div className="paragraph paragraph--contact">ESPA Vontovorona</div>
                        </div>
                        <div className="other-contact">
                            <div className="heading-tertiary">Numero de telephone</div>
                            <div className="paragraph paragraph--contact">+261 34 88 183 75</div>
                        </div>
                        <div className="other-contact">
                            <div className="heading-tertiary">Email</div>
                            <div className="paragraph paragraph--contact">manohyrajaonah@gmail.com</div>
                        </div>
                    </div>
                    <div className="heading-secondary--dark u-margin-bottom-2 u-margin-top-10">Contacter nous</div>
                    <input type="text" className='contact__input' placeholder='Entrer votre nom' required/>
                    <input type="email" className='contact__input' placeholder='Entrer une valide adresse email' required/>
                    <textarea name="" className='contact__input contact__text-area' id="" cols="30" rows="10" placeholder='Ecrivez nous un message'>
                    </textarea>
                    <input type="submit" className="btn--contact" href="#" value="Envoyer"></input>
                </form>
            </div>
        </section>
        <footer>
            Copyright &copy; 2023 by Team Sahy. Done with love 
        </footer>  
        </>
    );
}

export default Home;
