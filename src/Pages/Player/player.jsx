import "./player.css";
import backArrow from '../../assets/back_arrow_icon.png'
import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {

  const {id}=useParams();
  const navigate=useNavigate();
  const [videoData, setVideoData] = useState({
    name:"",
    key:"",
    published_at:"",
    type_of:""
  });
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTg5OTcwYjllZGEwNGRjOWRhNmM5YjExZDAzMmQyYyIsIm5iZiI6MTczMDk5OTA0OS4xMjU3MzQ2LCJzdWIiOiI2NzJjZWY2OWViZTIxZGVmMDhjOGQ4MmUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._wDF-s7Z650CcybBktQBSGGS9u5HY57Sv16LKnZqAak'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setVideoData(res.results[0]))
    .catch(err => console.error(err));
  },[])
  
 
  return <div className="player">
    <img src={backArrow} alt="" onClick={()=>navigate('/')} />
    <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${videoData.key}`} title="trailer" frameBorder='0' allowFullScreen></iframe>
    <div className="playerInfo">
      <p>{videoData.published_at.slice(0,10)}</p>
      <p>{videoData.name}</p>
      <p>{videoData.type_of}</p>
    </div>
  </div>;
};

export default Player;
