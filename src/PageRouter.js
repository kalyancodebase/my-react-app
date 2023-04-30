import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/Home";
import LoginPage from "./components/Auth/Login";
import RegisterPage from "./components/Auth/Register";
import PageNotFound from "./components/PageNotFound/PageNotFound";

const PageRouter = () => {
    return(
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" Component={HomePage} />
                <Route path="/login" Component={LoginPage} />
                <Route path="/register" Component={RegisterPage} />
                <Route path="*" Component={PageNotFound} />
            </Routes>
        </Router>
    )
}

export default PageRouter;