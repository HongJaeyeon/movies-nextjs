import { useRouter } from "next/router";
import PageTitle from "../../components/PageTitle";

export default function Detail({params}){//props라는 object안에있는 params가져오기위해 {params}
    const router = useRouter();
    const [title, id] = params;
    return (
      <div>
        <PageTitle title={title}></PageTitle>
        <h1>Movie Title:</h1>
        <h2>{title}</h2>
      </div>  
    );
}

export function getServerSideProps({query:{params}}){
  return {
    props:{
      params,
    },
  };
}