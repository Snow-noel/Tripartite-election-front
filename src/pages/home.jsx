
import "../css/home.css"
import { ChevronDown } from "lucide-react";

export default function HomePage(){


    return(
        <main>
            <nav className="nav-bar">
                <h1 className="h1">Vote Day</h1>
                <div className="links">
                    <a href="/" class="home active">Home</a>
                    <a href="/results" class="results">Veiw results</a>
                    <a href="/about-votes">about votes</a>
                </div>
            </nav>
            <section class="hero">
                <h1 class="welcome">Welcome to 2025 online voting platform</h1>
                <h4 class="h4">make sure you register then you can vote and veiw the results </h4>
            </section>
            <p>your vote will change everything</p>
            
        </main>
    );
}