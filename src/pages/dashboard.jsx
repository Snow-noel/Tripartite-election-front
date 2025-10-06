import "../css/results.css"
import { useEffect, useState } from "react"

function SectionTitle({children}){
    return <h2 style={{marginTop: '1rem'}}>{children}</h2>
}

export default function Dashboard(){
    const [state, setState] = useState({loading:true})

    useEffect(()=>{
        fetch('http://localhost:3000/api/dashboard-stats')
            .then(r=>r.json())
            .then(json=>{
                if(json.success && json.data){
                    setState({loading:false, data: json.data})
                } else {
                    setState({loading:false, error: json.message || 'Invalid response'})
                }
            })
            .catch(err=>setState({loading:false, error: err.message}))
    },[])

    const d = state.data || {}

    return (
        <main>
            <nav className="nav-bar">
                <h1 className="h1">Vote Day</h1>
                <div className="links">
                    <a href="/"className="home">Home</a>
                    <a href="/results" className="results">Veiw results</a>
                    <a href="/dashboard" className="results active">Dashboard</a>
                </div>
            </nav>

            <section className="table-wrap">
                <h1>Dashboard</h1>
                {state.loading && <p>Loading dashboard...</p>}
                {state.error && <p className="error">{state.error}</p>}

                {d.unregisteredByGender && (
                    <>
                        <SectionTitle>Unregistered by Gender</SectionTitle>
                        <table className="results-table">
                            <thead>
                                <tr>
                                    <th>Gender</th>
                                    <th>Unregistered</th>
                                    <th>Total</th>
                                    <th>%</th>
                                </tr>
                            </thead>
                            <tbody>
                                {d.unregisteredByGender.map((it, idx)=> (
                                    <tr key={idx}>
                                        <td>{it.Gender}</td>
                                        <td>{it.UnregisteredCount}</td>
                                        <td>{it.TotalCount}</td>
                                        <td>{it.UnregisteredPercentage}%</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )}

                {d.winningCandidates && (
                    <>
                        <SectionTitle>Winning Candidates</SectionTitle>
                        <table className="results-table">
                            <thead>
                                <tr>
                                    <th>Position</th>
                                    <th>Name</th>
                                    <th>Party</th>
                                    <th>Constituency / Ward</th>
                                    <th>Votes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {d.winningCandidates.map((it, idx)=> (
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
                    </>
                )}

                {d.genderVotingPatterns && (
                    <>
                        <SectionTitle>Gender Voting Patterns</SectionTitle>
                        <div className="results-grid">
                            {d.genderVotingPatterns.map((it, idx)=> (
                                <div className="card" key={idx}>
                                    <h3>{it.Category}</h3>
                                    <p>Same gender votes: <strong>{it.SameGenderVotes}</strong></p>
                                    <p>Total votes: <strong>{it.TotalVotesByGender}</strong></p>
                                    <p>Percentage: <strong>{it.Percentage}%</strong></p>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {d.nullVoidVotes && (
                    <>
                        <SectionTitle>Null/Void Votes by Ward</SectionTitle>
                        <table className="results-table">
                            <thead>
                                <tr>
                                    <th>Ward</th>
                                    <th>Null/Void</th>
                                    <th>Total</th>
                                    <th>%</th>
                                </tr>
                            </thead>
                            <tbody>
                                {d.nullVoidVotes.map((it, idx)=> (
                                    <tr key={idx}>
                                        <td>{it.WardName}</td>
                                        <td>{it.NullVoidVotes}</td>
                                        <td>{it.TotalVotes}</td>
                                        <td>{it.NullVoidPercentage}%</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )}

            </section>
        </main>
    )
}
