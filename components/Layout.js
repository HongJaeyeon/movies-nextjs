import NavBar from "./Nav"

export default function Layout ({ children }) {
    return(
        <>
            <NavBar/>
            <div>{ children }</div>
        </>
    );
};

//_app.js는 파일이 크지 않도록 유지-> _app.js를 위한 component인 Layout