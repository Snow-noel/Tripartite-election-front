
import "../css/about-votes.css"
export default function AboutVotes(){


    return(
        <main className="main-sec">
           <section className="voters">
                <h1>Check Percentage of registered Voters</h1>
                <div className="btns">
                    <button>Male</button>
                    <button>Female</button>
                 </div>
                 <p>767</p>
           </section>
           <section className="candidates">
                <h1>Check all candidates who did not register</h1>
                <button>Candidates</button>
                <p>737</p>
           </section>
           <section className="invalid">
                <h1>Check All null and void Votes</h1>
                <button>Null/Void</button>
                <p>547</p>
           </section>

        </main>
    )
}