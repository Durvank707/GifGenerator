import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner'

const MY_API_KEY = '2Vf1uqVqmP0EpVO3VshH4pzt63XX4wqd'

const Tag = () => {
    
    const [loading, setLoading] = useState('false');
    const [tag, setTag] = useState("meme");
    const [gif, setGif] = useState("");

    async function fetchData(){
        try{
            setLoading(true);   
            const url = `https://api.giphy.com/v1/gifs/random?api_key=${MY_API_KEY}&tag=${tag}`;
            const output = await axios.get(url);
            const imageSource = output.data.data.images.downsized_large.url;
            setGif(imageSource);
            setLoading(false);
        }
        catch{
            alert("Failed")
        }
    }

    useEffect(()=>{
        fetchData();
    },[]);
    
    return (
        <div className='tag'>
            <h1>Random {tag} Gif</h1>

            {
                loading ? <Spinner/> :  <img src={gif} width="450" />
            }           

            <input onChange={(event)=>{setTag(event.target.value)}} value={tag} />
            <button onClick={()=>fetchData()}>Generate</button>
        </div>
    )
}

export default Tag