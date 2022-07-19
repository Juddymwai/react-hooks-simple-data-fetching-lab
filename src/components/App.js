import React, {useState, useEffect} from 'react'



function App(){
    const [pic, setPic]= useState('')

    useEffect(() =>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) =>response.json())
        .then((data)=> {setPic(data.message)})

    }, [] )

    if (!pic)
        return <p>Loading...</p>

        



    return <div>
        
        <img src={pic} alt='A Random Dog '/>
        

    </div>
    

}
export default App;

