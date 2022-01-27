import PageTitle from "../components/PageTitle";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home({results}){
    const router = useRouter();
    const onClick = (id, title) =>{
        router.push(`movies/${title}/${id}`);
    };

    return (
        //여기서 {}은 jsx문법에 js쓰려고해서
    <div className="container">
        <PageTitle title="Home"/>
        {results?.map(movie => (
            <div className="movie" onClick={ ()=> onClick(movie.id, movie.title)} key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                <h1>
                    <Link href={`/movies/${movie.title}/${movie.id}`}>
                        <a>{movie.title}</a>
                    </Link>
                </h1>
            </div>
            )
        )}
    
`        <style jsx>{`
            .container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                padding: 20px;
                gap: 50px;
            }
            .movie{
                margin: 0 auto;
            }
            .movie img {
                max-width: 100%;
                border-radius: 12px;
                transition: transform 0.2s ease-in-out;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            }
            .movie:hover img {
                transform: scale(1.05) translateY(-10px);
                cursor: pointer;
            }
            .movie h1 {
                font-size: 18px;
                text-align: center;
            }
            h1 a{
                text-decoration: none;
                color: black;
            }

        `}</style>`
    </div>
    );
};

export async function getServerSideProps(){
    //여기에 어떤 코드를 쓴다고 해도 server에서 돌아감
    const {results} = await (await fetch('http://localhost:3000/api/movies')).json();
    return{
        props:{
            results,
        },
    };
}