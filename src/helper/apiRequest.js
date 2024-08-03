//for header we will use token and otherwise use api key 

const API_KEY='b1afec16ca29a99de834626942f6d05d'
export const IMG_URL =`https://image.tmdb.org/t/p/original`
   
export const request ={
    getDataByNetwork :(networkId)=>{return `discover/tv?api_key=${API_KEY}&language=en-US&page=1&with_networks=${networkId}`},
    getCollections : (platform , endpoint) => `${platform}/${endpoint}?api_key=${API_KEY}&language=en-US&page=1` ,
    getVedioDetails :(platform ,id)=>`${platform}/${id}?api_key=${API_KEY}&append_to_response=videos,credits`,
    getGenresList:(platform)=>`genre/${platform}/list?api_key=${API_KEY}`,
    getDataByGenre :(platform ,genreid)=>{return `discover/${platform}?api_key=${API_KEY}&language=en-US&page=1&with_genres=${genreid}`},
 }   

export const platformType={                   
    tv:"tv",              
    movie:"movie" 
}
           
export const endpoints ={
    popular:"popular",     
   topRated:"top_rated",   
   upcoming:"upcoming",
    nowPlaying:"now_playing",    
    airingToday:"airing_today",        
    onTheAir :"on_the_air"
}




































