// import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { songList } from './songList';


const KeyList = Object.keys(songList);

export default function App() {

  var [songs, set] = useState('ALL');
  function display(item) {
    console.info(item);
    console.info(songList[item]);
    songs = item;
    set(songs);
  }

  return (
    <div className="App">
      <h1>TEDx Talks Genre</h1>
      <h6>Here is the list of my favourite Ted Talk</h6>
      {/* <p style={{fontSize:"1.5rem", margin:"1rem"}}>PLEASE SELECT ANY GENRE YOU WANT</p> */}
      <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>{
        KeyList.map((e) => {
          return (
            <div>
              <button className='bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 border-b-4 border-red-900 hover:border-red-600 rounded' key={e} style={{ margin: "2rem 5px", minWidth: "160px" }} onClick={() => display(e)}>{e}</button>
            </div>
          )
        })
      }
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
        {songList[songs].map((g) => {
          return (
            <div>
              {/* <span key={g.artists}>{g.artists}</span> */}
              <div className="max-w-sm rounded overflow-hidden shadow-lg border-4 border-red-700" style={{ 'margin-bottom': '1rem' }}>
                <iframe className="w-full" width="560" height="315" src={g.link}
                  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className="px-6 py-4">
                  <div key={g.speaker} className="font-bold text-xl mb-2">Speaker - {g.speaker}</div>
                  <p className="text-gray-500 text-base">{g.desc}</p>
                  <p>Views - {g.views}</p>
                </div>
              </div>
            </div>);
        })
        }
      </div>
    </div>
  );
}

