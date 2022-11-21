import { createBrowserRouter } from "react-router-dom";
import About from "../../components/About/About";
import Home from "../../components/Home/Home";
import Resume from "../../components/Resume/Resume";
import Main from "../../layouts/Layouts/Main";

export const routes = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/about',
                element : <About></About>
            },
            {
                path : '/resume',
                element : <Resume></Resume>
            }
        ]
    }
])