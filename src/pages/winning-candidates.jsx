import "../css/results.css"
import { useEffect, useState } from "react"

export default function WinningCandidates(){
    const [state, setState] = useState({loading:true})

    useEffect(()=>{
        fetch('http://localhost:3000/api/winning-candidates')
            .then(r=>r.json())
            .then(json=>{
                if(json.success && Array.isArray(json.data)){
                    setState({loading:false, items: json.data})
                } else {
                    setState({loading:false, error: json.message || 'Invalid response'})
                }
            })
            .catch(err=>setState({loading:false, error: err.message}))
    },[])

    return (
        <main>
            <nav className="nav-bar">
                <h1 className="h1">Vote Day</h1>
                <div className="links">
                    <a href="/"className="home">Home</a>
                    <a href="/results" className="results">Veiw results</a>
                    <a href="/winning-candidates" className="results active">Winners</a>
                </div>
            </nav>

            <section className="table-wrap">
                <h2>Winning Candidates</h2>
                {state.loading && <p>Loading...</p>}
                {state.error && <p className="error">{state.error}</p>}
                {state.items && (
                    <table className="results-table">
                        <thead>
                            <tr>
                                <th>Position</th>
                                <th>Name</th>
                                <th>Party</th>
                                <th>Constituency / Ward</th>
                                <th>Total Votes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.items.map((it, idx)=> (
                                <tr key={idx}>
                                    <td>{it.Position}</td>
                                    <td>{it.FirstName} {it.LastName}</td>
                                    <td>{it.PartyName}</td>
                                    <td>{it.ConstituencyName ?? it.WardName ?? '-'}</td>
                                    <td>{it.TotalVotes}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </section>
        </main>
    )
}
