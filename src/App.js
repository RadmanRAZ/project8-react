import React from 'react';


function App() {
  const[value , setValue] = React.useState('')
  const[result , setResult] = React.useState("")

  

  const fetchData = ()=>{
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${value}&client_id=OI6o_Ea1sSddIQpgq0wYgHKPIXTCePiFaxftLa236Fk`)
    .then(res => res.json())
    .then(data =>{
      setResult(data.results);
      
    })


    
  }

 
  return(
    <div>
      <div className='header'>  
      <p>جستجو</p>
      <input type="text" value={value} onChange = {(e)=>setValue(e.target.value)} />
      <button onClick={fetchData} >ارسال</button>
    </div>
    <div className='images'>
      <div className='gallery'>
      {
        result && result.map((item)=>{
           return <img src={item.urls.regular} alt=""/>
        })
      }
      </div>
    </div>
    </div>
    
  )
}

export default App;
