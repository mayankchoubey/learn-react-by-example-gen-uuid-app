function Header() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-secondary sticky-top">
            <a className="navbar-brand" href="#">Online UUID Generator</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#online-uuid-nav-data" aria-controls="online-uuid-nav-data" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
  
            <div className="collapse navbar-collapse" id="online-uuid-nav-data">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://datatracker.ietf.org/doc/html/rfc4122">What is V4 UUID?</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;