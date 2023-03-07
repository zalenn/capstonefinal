import './App.css';

const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URI = "http://localhost:3000/";
const RESPONSE_TYPE = "token";
const CLIENT_ID = "065f17f4f5c94b99842a9aeede00c63e"


// const [token, setToken] = useState("")
// const [searchKey, setSearchKey] = useState("")
// const [artists, setArtists] = useState([])

// // const getToken = () => {
// //     let urlParams = new URLSearchParams(window.location.hash.replace("#","?"));
// //     let token = urlParams.get('access_token');
// // }

// useEffect(() => {
//     const hash = window.location.hash
//     let token = window.localStorage.getItem("token")

//     // getToken()


//     if (!token && hash) {
//         token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

//         window.location.hash = ""
//         window.localStorage.setItem("token", token)
//     }

//     setToken(token)

// }, [])

// const logout = () => {
//     setToken("")
//     window.localStorage.removeItem("token")
// }

// const searchArtists = async (e) => {
//     e.preventDefault()
//     const {data} = await axios.get("https://api.spotify.com/v1/search", {
//         headers: {
//             Authorization: `Bearer ${token}`
//         },
//         params: {
//             q: searchKey,
//             type: "artist"
//         }
//     })

//     setArtists(data.artists.items)
// }

// const renderArtists = () => {
//     return artists.map(artist => (
//         <div key={artist.id}>
//             {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
//             {artist.name}
//         </div>
//     ))
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Click Below to Authenticate Spotify</h1>
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
      </header>
    </div>
  );
}
 
export default App;
