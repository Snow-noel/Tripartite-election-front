import "../css/results.css"
import { useEffect, useState } from "react"

function StatCard({title, data, loading, error}){
    if(loading) return (
        <div className="card">
            <h3>{title}</h3>
            <p className="loading">Loading...</p>
        </div>
    )
    if(error) return (
        <div className="card">
            <h3>{title}</h3>
            <p className="error">{error}</p>
        </div>
    )

    return (
        <div className="card">
            <h3>{title}</h3>
            <p>Unregistered: <strong>{data.unregistered}</strong></p>
            <p>Total: <strong>{data.total}</strong></p>
            <p>Percentage: <strong>{data.percentage}%</strong></p>
        </div>
    )
}

export default function Results(){
    const [female, setFemale] = useState({loading:true})
    const [male, setMale] = useState({loading:true})
    const [candidates, setCandidates] = useState({loading:true})

    useEffect(()=>{
        const base = "http://localhost:3000/api"

        fetch(`${base}/unregistered-females`)
            .then(r=>r.json())
            .then(json=>{
                if(json.success && json.data){
                    setFemale({
                        loading:false,
                        unregistered: json.data.UnregisteredFemales,
                        total: json.data.TotalFemales,
                        percentage: json.data.Percentage
                    })
                } else {
                    setFemale({loading:false, error: json.message || 'Invalid response'})
                }
            })
            .catch(err=>setFemale({loading:false, error: err.message}))

        fetch(`${base}/unregistered-males`)
            .then(r=>r.json())
            .then(json=>{
                if(json.success && json.data){
                    setMale({
                        loading:false,
                        unregistered: json.data.UnregisteredMales,
                        total: json.data.TotalMales,
                        percentage: json.data.Percentage
                    })
                } else {
                    setMale({loading:false, error: json.message || 'Invalid response'})
                }
            })
            .catch(err=>setMale({loading:false, error: err.message}))

        fetch(`${base}/unregistered-candidates`)
            .then(r=>r.json())
            .then(json=>{
                if(json.success && json.data){
                    setCandidates({
                        loading:false,
                        unregistered: json.data.UnregisteredCandidates,
                        total: json.data.TotalCandidates,
                        percentage: json.data.Percentage
                    })
                } else {
                    setCandidates({loading:false, error: json.message || 'Invalid response'})
                }
            })
            .catch(err=>setCandidates({loading:false, error: err.message}))

    },[])

    return(
        <main>
            <nav className="nav-bar">
                <h1 className="h1">Vote Day</h1>
                <div className="links">
                    <a href="/"className="home">Home</a>
                    <a href="/results" className="results active">Veiw results</a>
                </div>
            </nav>

            <section className="results-grid">
                <StatCard title="Unregistered Females" data={female} loading={female.loading} error={female.error} />
                <StatCard title="Unregistered Males" data={male} loading={male.loading} error={male.error} />
                <StatCard title="Unregistered Candidates" data={candidates} loading={candidates.loading} error={candidates.error} />
            </section>
        </main>
    )
}