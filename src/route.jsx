import HomePage from "./pages/home";
import Results from "./pages/results";
import AboutVotes from "./pages/about-vote";
import WinningCandidates from "./pages/winning-candidates";
import GenderPatterns from "./pages/gender-patterns";
import UnregisteredByGender from "./pages/unregistered-by-gender";
import NullVoidVotes from "./pages/null-void-votes";
import Dashboard from "./pages/dashboard";
import VotersByStatus from "./pages/voters-by-status";



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
        path: "/winning-candidates",
        element: <WinningCandidates/>
    },
    {
        path: "/gender-patterns",
        element: <GenderPatterns/>
    },
    {
        path: "/unregistered-by-gender",
        element: <UnregisteredByGender/>
    },
    {
        path: "/null-void-votes",
        element: <NullVoidVotes/>
    },
    {
        path: "/dashboard",
        element: <Dashboard/>
    },
    {
        path: "/voters-by-status",
        element: <VotersByStatus/>
    },
    {
        path: "/about-votes",
        element: <AboutVotes/>
    }
]

export default routes;