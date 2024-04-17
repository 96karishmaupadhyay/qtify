import axios from "axios"
const url="https://qtify-backend-labs.crio.do"
export const fetchTopAlbum=async()=>{
    const res=await axios.get(`${url}/albums/top`)
return res.data
}
export const fetchNewAlbum=async()=>{
    const res=await axios.get(`${url}/albums/new`)
return res.data
}
export const fetchsongs=async()=>{
    const res=await axios.get(`${url}/songs`)
return res.data
}