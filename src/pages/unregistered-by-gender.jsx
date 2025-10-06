import "../css/results.css"
import { useEffect, useState } from "react"

export default function UnregisteredByGender(){
    const [state, setState] = useState({loading:true})

    useEffect(()=>{
        fetch('http://localhost:3000/api/unregistered-by-gender')
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
                    <a href="/unregistered-by-gender" className="results active">Unregistered by Gender</a>
                </div>
            </nav>

            <section className="table-wrap">
                <h2>Unregistered By Gender</h2>
                {state.loading && <p>Loading...</p>}
                {state.error && <p className="error">{state.error}</p>}
                {state.items && (
                    <table className="results-table">
                        <thead>
                            <tr>
                                <th>Gender</th>
                                <th>Unregistered Count</th>
                                <th>Total Count</th>
                                <th>Unregistered %</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.items.map((it, idx)=> (
                                <tr key={idx}>
                                    <td>{it.Gender}</td>
                                    <td>{it.UnregisteredCount}</td>
                                    <td>{it.TotalCount}</td>
                                    <td>{it.UnregisteredPercentage}%</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </section>
        </main>
    )
}
