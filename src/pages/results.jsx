import "../css/results.css"
export default function Results(){

    return(
        <main>
            <nav className="nav-bar">
                <h1 className="h1">Vote Day</h1>
                <div className="links">
                    <a href="/"className="home">Home</a>
                    <a href="/results" className="results active">Veiw results</a>
                </div>
            </nav>
        </main>
    )
}