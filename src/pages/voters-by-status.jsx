import "../css/results.css"
import { useEffect, useState } from "react"

export default function VotersByStatus(){
    const [state, setState] = useState({loading:true})

    useEffect(()=>{
        fetch('http://localhost:3000/api/voters-by-status')
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
                    <a href="/voters-by-status" className="results active">Voters Status</a>
                </div>
            </nav>

            <section className="table-wrap">
                <h2>Voters by Status</h2>
                {state.loading && <p>Loading...</p>}
                {state.error && <p className="error">{state.error}</p>}
                {state.items && (
                    <table className="results-table">
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th>Count</th>
                                <th>Percentage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.items.map((it, idx)=> (
                                <tr key={idx}>
                                    <td>{it.Status}</td>
                                    <td>{it.Count}</td>
                                    <td>{it.Percentage}%</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </section>
        </main>
    )
}
