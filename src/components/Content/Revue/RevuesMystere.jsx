export function RevuesMystere (props) {
    return (
        <div className="mystere-revues-container">

                <div className="mystere-2-container">
                    <div className="mystere-2-title-container">
                            <p className="mystere-2-title">Numéro 2 - La liberté en politique</p>
                    </div>

                    <div className="mystere-2-cover">
                        <img src={props.mystere2} alt="" className="mystere-2-img"/>
                    </div>

                </div>

                <div className="mystere-1-container">
                    <div className="mystere-1-title-container">
                            <p className="mystere-1-title">Numéro 1 - Contreverse</p>
                    </div>

                    <div className="mystere-1-cover">
                        <img src={props.mystere1} alt="" className="mystere-1-img"/>
                    </div>

                </div>
            </div>
    )
}