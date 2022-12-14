import { createBrowserRouter } from "react-router-dom";
import About from "../../components/About/About";
import ContactForm from "../../components/ContactForm/ContactForm";
import Home from "../../components/Home/Home";
import Portfolio from "../../components/Portfolio/Portfolio";
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
            },
            {
                path : '/portfolio',
                element : <Portfolio></Portfolio>
            },
            {
                path : '/contact',
                element : <ContactForm></ContactForm>
            }
        ]
    }
])