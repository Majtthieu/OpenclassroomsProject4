import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './pages/Error';
import Housing from './pages/Housing';
import logements from "./datas/logements.json";

const App = () => {
    return (
        <Router>
            <div className="wrapper">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Error />} />
                    {logements.map((logement) => (
                        <Route path={"/housing/" + logement.id} element={<Housing />} />
                    ))}
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

export default App;
