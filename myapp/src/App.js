import './App.css';
import {useEffect, useState } from 'react';

const PAGE_NUMBER =1;

function App() {
  const [state, setState] = useState([])
  const [page, setPage]= useState(PAGE_NUMBER);
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true);
    fetch(`https://www.pinkvilla.com/photo-gallery-feed-page/page/${page}`)
    .then(res=> res.json())
    .then(json => setState([...state, ...json.nodes]))
    .finally(() => {
      setLoading(false);
    })
  }, [page])

  const scrollToEnd = ()=>{
    setPage(page+1)
  }

  window.onscroll= function(){
    console.log("inside scroll")
    console.log("inside function: " + window.innerHeight +" " +document.documentElement.scrollTop+"  "+document.documentElement.offsetHeight);
    if(window.innerHeight+document.documentElement.scrollTop >=
      document.documentElement.offsetHeight){
        console.log("inside if loop")
        scrollToEnd()
    }
  }

  return (
    <div className="App" style={{height:'700px', marginTop:'50px'}}>
      {state.length>0 && state.map((el, i)=>{
        //console.log(JSON.stringify(el));
        return (
          <div key={i} className={'scrollcontainer'}>
            <img style={{float:'left'}} src={"https://www.pinkvilla.com/"+el.node.field_photo_image_section}></img>
            <h4>Title: {el.node.title}</h4>
            <h4>Path: {el.node.path}</h4>
          </div>
        )
        })
      }
      {loading && <p style={{color: "#3556e8", fontSize:"25px", fontWeight:"bold"}}>Loading.......</p>}
    </div>
  );
}

export default App;
