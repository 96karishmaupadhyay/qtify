import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import { useEffect, useState } from 'react';
import { fetchNewAlbum, fetchTopAlbum, fetchsongs } from './Components/api/api';
import Card from './Components/Card/Card';
import Section from './Components/Section/Section';
import { Divider } from '@mui/material';
import AccordionExpandDefault from './Components/Accordion/Accordion';

function App() {
const [topAlbum,setTopAlbum]=useState([])
const [newAlbum,setNewAlbum]=useState([])
const [songs,setSongs]=useState([])
const [value,setValue]=useState(0)
const [filterTabData,setFilterTabData]=useState([])
const handleChange=(event,newValue)=>{
  setValue(newValue)
}
  const fetchedDataTop=async()=>{
    const data=await fetchTopAlbum()
   setTopAlbum(data)
  }
  const fetchedDataNew=async()=>{
    const data=await fetchNewAlbum();
    setNewAlbum(data)
  }
  const fetchedDataSongs=async()=>{
    const data=await fetchsongs()
    setSongs(data)
  }
  //console.log(topAlbum)
  
  let filteredData = (value) => {
    setFilterTabData(value);
  };
  
  let displaySongs = (value) => {
    let key;
  
    if (value === 0) {
      filteredData(songs);
      return;
    } else if (value === 1) {
      key = "rock";
    } else if (value === 2) {
      key = "pop";
    } else if (value === 3) {
      key = "jazz";
    } else if (value === 4) {
      key = "blues";
    }
  
    let res = songs.filter((item) => item.genre.key === key);
    filteredData(res);
  };
  

  // console.log(
  //    songs.filter((item) => item.genre.key === "blues"))
  
  useEffect(() => {
    displaySongs(value);
  }, [value]);


  useEffect(()=>{
    fetchedDataTop()
    fetchedDataNew()
    fetchedDataSongs()
  },[value])
  // console.log(songs,"song")
  // console.log(topAlbum,"songtop")
  // console.log(newAlbum,"newsong")
  return (
    <div className="App">
     <Navbar data={topAlbum}/>
     <Hero/>
     {/* {topAlbum.map((song)=>
    <Card data={song} type="albums"/>
   )}    */}
  <div>
  <Section data={topAlbum} SongHeading="Top Albums" type="albums" filterTabData={topAlbum}/>
   <Section data={newAlbum} SongHeading="New Albums" type="albums"  filterTabData={newAlbum}/>
   <Divider style={{ borderColor: 'green',border: '1px solid green' }}/>
   <Section data={songs} 
   SongHeading="Songs" 
   type="song" 
   handleChange={handleChange} 
   filteredData={filteredData}
   filterTabData={filterTabData} 
   value={value}/>
  </div>
  <Divider style={{ borderColor: 'green',border: '1px solid green' }}/>
  <AccordionExpandDefault/>
    </div>
  );
}

export default App;
