    import React, { useEffect } from 'react'
    import { useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner';

const MY_API_KEY = '2Vf1uqVqmP0EpVO3VshH4pzt63XX4wqd'

const Random = () => {

    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState('false');

    async function fetchData() {
        try{
            setLoading(true)
            const url = `https://api.giphy.com/v1/gifs/random?api_key=${MY_API_KEY}`;
            const output = await axios.get(url);
            const imageSource = output.data.data.images.downsized_large.url;
            setGif(imageSource);
            setLoading(false);
        }
        catch(error){
            alert("Failed")
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='random'>
            <h1>Random Gif</h1>
            {
                loading ? <Spinner/> : <img src={gif} width="450" />
            }
            <button onClick={()=> fetchData()}>Generate</button>
        </div>
    );
};

export default Random;   