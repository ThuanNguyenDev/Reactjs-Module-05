import React from "react";
import axios from 'axios'
import { useState , useEffect } from "react";




function Test() {
    const [videos, setVideos] = useState([]);
    console.log(videos);

    // const componentDidMount =  () => {
    //     axios
    //     .get("http://localhost:8080/api/show")
    //     .then ( res => 
    //         setVideos(res.data)
        
    //     )
      
    //     .catch (
    //       err => {
    //         throw err;
    //       }
    //     );
      
    //   }

    useEffect(() => {
        axios
          .get("http://localhost:8080/api/show")
          .then((res) => {
            setVideos(res.data);
          })
          .catch((err) => {
            throw err;
          });
      }, []);
       
      console.log(videos);
  return (
    <div>
            {/* <button type="button" onClick={componentDidMount}>Lay Video</button> */}
            {
                videos.map( video => (
                    <div key={video.id}>{video.title}</div>
                )
                    
                )
            }
    </div>
  )
}

export default Test