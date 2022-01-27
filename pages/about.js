import PageTitle from "../components/PageTitle";

export default function hello(){
    return (
    <div>
        <PageTitle title="about"/>
        <h1>Welcome!</h1>
        <p>This homepage was made to practice next.js</p>
        <p>2022.01.27</p>
        <style jsx>{`            
            div{
                text-align: center;
            }
        `}</style>
    </div>
    )
}