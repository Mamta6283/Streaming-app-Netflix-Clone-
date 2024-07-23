//for header we will use token and otherwise use api key 

const API_KEY='b1afec16ca29a99de834626942f6d05d'

const request ={
    getDataByNetwork :(networkId)=>{return `/tv?api_key=${API_KEY}&language=en-US&page=1&with_networks=${networkId}`}
}
