import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <span className="text-muted">The UUIDs generated by this site conform to RFC 4122 whenever possible. 
                    <a className="text-small" href="https://en.wikipedia.org/wiki/Universally_unique_identifier">
                        Read more about UUIDs at Wikipedia.
                    </a>
                </span>
            </div>
        </footer>
    );
}

export default Footer;