const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  async redirects(){
    return[
      {
        source: "/old-post/:abc*",
        destination:"/new-post/:abc*",
        permanent: false,
        //브라우저나 검색엔진이 이걸 계속 기억할까 말까 정하는 옵션
      }
    ]
  },

  async rewrites(){
    return[
      {
        source:"/api/movies",
        destination:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source:"/api/movies/:id",
        destination:`https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      }
    ]
  }
}