import HomePage from "./pages/home";
import Results from "./pages/results";
import AboutVotes from "./pages/about-vote";



const routes = [
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/results",
        element: <Results/> 
    },
    {
        path: "/about-votes",
        element: <AboutVotes/>
    }
]

export default routes;