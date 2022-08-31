import './App.css';
import {useEffect, useState } from 'react';

const PAGE_NUMBER =1;

function App() {
  const [state, setState] = useState([])
  const [page, setPage]= useState(PAGE_NUMBER);

  useEffect(()=>{
    fetch(`https://www.pinkvilla.com/photo-gallery-feed-page/page/${page}`)
    .then(res=> res.json())
    .then(json => setState([...state, ...json.nodes]))
  }, [])

  const scrollToEnd = ()=>{
    setPage(page+1)
  }

  window.onscroll= function(){

    if(window.innerHeight+document.documentElement.scrollTop===
      document.documentElement.offsetHeight){
        scrollToEnd()
    }
  }

  return (
    <div className="App" style={{height:'700px'}}>
      {state.length>0 && state.map((el, i)=>{
        console.log(JSON.stringify(el));
        return (
          <div key={i} className={'container'}>
            <img style={{float:'left'}} src={"https://www.pinkvilla.com/"+el.node.field_photo_image_section}></img>
            <h4>Title: {el.node.title}</h4>
            <h4>Path: {el.node.path}</h4>
          </div>
        )
        })
      }
    </div>
  );
}

export default App;
