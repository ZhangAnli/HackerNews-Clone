import React, { useEffect, useState } from 'react'; 
import { getStoryIds } from '../services/hnApi'; 

export const StoriesContainer = () => {
    
    const[storyIds, setStoryIds] = useState([]); 

    useEffect(() => {
        getStoryIds().then(data => setStoryIds(data)); 
        console.log("use effect here!")
    }, []); 
    
    return (
        <p>
            {JSON.stringify(storyIds)}
        </p>
    )
}

export default StoriesContainer; 
