import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './sass/main.scss';
import Home from './pages/Home';
import Apk from './pages/Apk';



const App = () => {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/apk" element={<Apk />} />
            </Routes>
        </Router>
        </>
    );
}

export default App;
