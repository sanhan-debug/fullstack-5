import AddForm from "../Pages/AddForm";
import Favorites from "../Pages/Favorites";
import Home from "../Pages/Home";
import Root from "../Pages/Root";


const ROUTES = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/addfrom",
                element: <AddForm />
            },
            {
                path: "/favorites",
                element: <Favorites />
            }
        ]
    }
]

export default ROUTES