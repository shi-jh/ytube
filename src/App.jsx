import React,{ useState, useEffect } from 'react';
import styles from './App.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);   
  const search =(query) =>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyD8xWMPpsYqBo5KIAsSqZ6GhkROmGPdaHI`, requestOptions)
      .then(response => response.json())
      .then(result => 
        result.items.map(item => ({...item, id: item.id.videoid})))
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyD8xWMPpsYqBo5KIAsSqZ6GhkROmGPdaHI", requestOptions)
      .then(response => response.json())
      .then(result =>setVideos(result.items))
      .catch(error => console.log('error', error));    
    }, [])
    return (
    <div className={styles.app}>
    <SearchHeader onSearch={search}/>
    <VideoList videos={videos} />
    </div>
    )
}

export default App;
