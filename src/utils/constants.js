export const pfp="https://pbs.twimg.com/profile_images/1752200299144699904/umhiFxUI_400x400.jpg"
export const LOGO="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const BG="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_KEY
    }
  };
  

export const IMG_CDN_URL="https://image.tmdb.org/t/p/w185"

export const SUPPORTED_LANGUAGES=[
{identifier :"en" , name:"English"} ,
{ identifier:"hindi" , name :"Hindi"},
{identifier:"marathi" , name :"Marathi"},
{identifier:"german" , name :"German"} ,

]

export const OPENAI_KEY= process.env.REACT_APP_OPENAI_KEY;