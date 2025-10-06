import "../css/results.css"
import { useEffect, useState } from "react"

function PatternCard({item}){
    return (
        <div className="card">
            <h3>{item.Category}</h3>
            <p>Same-gender votes: <strong>{item.SameGenderVotes}</strong></p>
            <p>Total votes by gender: <strong>{item.TotalVotesByGender}</strong></p>
            <p>Percentage: <strong>{item.Percentage}%</strong></p>
        </div>
    )
}

export default function GenderPatterns(){
    const [state, setState] = useState({loading:true})

    useEffect(()=>{
        fetch('http://localhost:3000/api/gender-voting-patterns')
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
                    <a href="/gender-patterns" className="results active">Gender Patterns</a>
                </div>
            </nav>

            <section className="results-grid">
                {state.loading && <p>Loading...</p>}
                {state.error && <p className="error">{state.error}</p>}
                {state.items && state.items.map((it, idx)=> <PatternCard key={idx} item={it} />)}
            </section>
        </main>
    )
}
