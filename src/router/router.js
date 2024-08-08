import AuthPage from "pages/AuthPage/AuthPage";
import Contacts from "pages/Contacts/Contacts";
import HomePage from "pages/HomePage/HomePage";
import RegistrPage from "pages/RegistrPage/RegistrPage";

export const Privatroutes = [
    {path: "/contacts", element: <Contacts /> },
    {path: "/", element: <HomePage /> }
]

export const Publicroutes = [
    {path: "/signup", element: <RegistrPage /> },
    {path: "/login", element: <AuthPage /> },
    {path: "/", element: <HomePage /> }
]