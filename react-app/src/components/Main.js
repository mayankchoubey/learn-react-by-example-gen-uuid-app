import React from 'react';
import './Main.css';

function Main() {
    const [uuid, setUuid] = React.useState(getUuid());
    const [copyText, setCopyText] = React.useState("Copy");

    function copyUUID() {
        navigator.clipboard.writeText(uuid);
        setCopyText("Copied!");
        setTimeout(
          () => setCopyText("Copy"),
          1000,
        );
    }

    function createUUID() {
      setUuid(getUuid());
    }

    function getUuid() {
        return crypto.randomUUID();
    }

    return (
        <main role="main" className="container mt-5">
            <div className="text-center">
                <h1 className="display-3">Online UUID Generator</h1>
                <p className="text-small">Your Version 4 UUID:</p>
                <p>
                    <span className="display-6 align-middle" id="uuid">{uuid}</span>
                    <button id="copy-button" className="btn btn-dark align-baseline button-with-icon" title="Copy the UUID to the clipboard." alt="Copy the UUID to the clipboard." onClick={copyUUID}>
                        <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4OC4zIDQ4OC4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODguMyA0ODguMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zMTQuMjUsODUuNGgtMjI3Yy0yMS4zLDAtMzguNiwxNy4zLTM4LjYsMzguNnYzMjUuN2MwLDIxLjMsMTcuMywzOC42LDM4LjYsMzguNmgyMjdjMjEuMywwLDM4LjYtMTcuMywzOC42LTM4LjZWMTI0ICAgIEMzNTIuNzUsMTAyLjcsMzM1LjQ1LDg1LjQsMzE0LjI1LDg1LjR6IE0zMjUuNzUsNDQ5LjZjMCw2LjQtNS4yLDExLjYtMTEuNiwxMS42aC0yMjdjLTYuNCwwLTExLjYtNS4yLTExLjYtMTEuNlYxMjQgICAgYzAtNi40LDUuMi0xMS42LDExLjYtMTEuNmgyMjdjNi40LDAsMTEuNiw1LjIsMTEuNiwxMS42VjQ0OS42eiIgZmlsbD0iI0ZGRkZGRiIvPgoJCTxwYXRoIGQ9Ik00MDEuMDUsMGgtMjI3Yy0yMS4zLDAtMzguNiwxNy4zLTM4LjYsMzguNmMwLDcuNSw2LDEzLjUsMTMuNSwxMy41czEzLjUtNiwxMy41LTEzLjVjMC02LjQsNS4yLTExLjYsMTEuNi0xMS42aDIyNyAgICBjNi40LDAsMTEuNiw1LjIsMTEuNiwxMS42djMyNS43YzAsNi40LTUuMiwxMS42LTExLjYsMTEuNmMtNy41LDAtMTMuNSw2LTEzLjUsMTMuNXM2LDEzLjUsMTMuNSwxMy41YzIxLjMsMCwzOC42LTE3LjMsMzguNi0zOC42ICAgIFYzOC42QzQzOS42NSwxNy4zLDQyMi4zNSwwLDQwMS4wNSwweiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="/>
                        <span id="copy-button-text">{copyText}</span>
                    </button>
                </p>
                <p>
                    <button id="refresh-button" className="btn btn-primary align-baseline button-with-icon" title="Generate a new UUID." alt="Generate a new UUID." onClick={createUUID}>
                        <img src="data:image/svg+xml;utf8;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik03IDloLTd2LTdoMXY1LjJjMS44NTMtNC4yMzcgNi4wODMtNy4yIDExLTcuMiA2LjYyMyAwIDEyIDUuMzc3IDEyIDEycy01LjM3NyAxMi0xMiAxMmMtNi4yODYgMC0xMS40NS00Ljg0NC0xMS45NTktMTFoMS4wMDRjLjUwNiA1LjYwMyA1LjIyMSAxMCAxMC45NTUgMTAgNi4wNzEgMCAxMS00LjkyOSAxMS0xMXMtNC45MjktMTEtMTEtMTFjLTQuNjYgMC04LjY0NyAyLjkwNC0xMC4yNDkgN2g1LjI0OXYxeiIgZmlsbD0iI0ZGRkZGRiIvPjwvc3ZnPg=="/>
                        <span id="refresh-button-text">Generate another UUID</span>
                    </button>
                </p>
            </div>
        </main>
    );
}

export default Main;
