// import logo from './logo.svg';
import './App.css';
import { useState } from "react";

export const songList = {
  ALL: [
    {
      title: "Why We Have Too Few Women Leaders",
      speaker: "Sheryl Sandberg",
      link: "https://www.youtube.com/embed/18uDutylDa4",
      views: "3,522,275 views",
      desc:"Facebook COO Sheryl Sandberg looks at why a smaller percentage of women than men reach the top of their professions -- and offers 3 powerful pieces of advice to women aiming for the C-suite."
    },
    {
      title: "Why Good Leaders Make You Feel Safe",
      speaker: "Simon Sinek",
      link: "https://www.youtube.com/embed/lmyZMtPVodo",
      views: "7,563,394 views",
      desc:"Management theorist Simon Sinek suggests, it's someone who makes their employees feel secure. But creating trust and safety especially in an uneven economy means taking on big responsibility."
    },
    {
      title: "Listen, Learn… Then Lead",
      speaker: "Stanley McChrystal",
      link: "https://www.youtube.com/embed/FmpIMt95ndU",
      views: "594,083 views",
      desc:"Four-star general Stanley McChrystal shares what he learned about leadership over his decades in the military. How can you build a sense of shared purpose among people of many ages and skill sets?"
    },
    {
      title: "The power of self-motivation",
      speaker: "Nakia Gelin",
      link: "https://www.youtube.com/embed/o05NaXMBKDI",
      views: "6,090 views",
      year:"2 Mar 2018",
      desc:"What if we all were self-motivated? When you are self-motivated, your bravery alone is enough to remain strong in various circumstances. Self-motivation is a quality that is essential for everyone that desires to be successful. "
    },
    {
      title: "The puzzle of motivation",
      speaker: "Dan Pink",
      link: "https://www.youtube.com/embed/rrkrvAUbU9Y",
      views: "10,345,330 views",
      year:"26 Aug 2009",
      desc:"Career analyst Dan Pink examines the puzzle of motivation, starting with a fact that social scientists know but most managers don't: Traditional rewards aren't always as effective as we think. Listen for illuminating stories and maybe, a way forward."
    },
    {
      title: "How to motivate yourself to change your behavior",
      speaker: "Tali Sharot",
      link: "https://www.youtube.com/embed/xp0O2vi8DX4",
      views: "13,451,654 views",
      year:"28 Oct 2014",
      desc:"What does make us change our actions? Tali Sharot reveals three ingredients to doing what's good for yourself.Dr. Tali Sharot is a neuroscientist at University College London and the director of the Affective Brain Lab. She is a faculty member of Psychology."
    },
    {
      title: "Do Schools Kill Creativity?",
      speaker: "Sir Ken Robinson",
      link: "https://www.youtube.com/embed/iG9CE55wbtY",
      views: "21,639,257 views",
      year:"7 Jan 2007",
      desc:"Sir Ken Robinson makes an entertaining and profoundly moving case for creating an education system that nurtures (rather than undermines) creativity."
    },
    {
      title: "Teachers need real feedback",
      speaker: "Bill Gates",
      link: "https://www.youtube.com/embed/81Ub0SMxZQo",
      views: "2,372,492 views",
      year:"8 May 2013",
      desc:"Bill Gates suggests that even great teachers can get better with smart feedback and lays out a program from his foundation to bring it to every classroom."
    },
    {
      title: "Our Failing Schools. Enough is Enough",
      speaker: "Geoffrey Canada",
      link: "https://www.youtube.com/embed/vY2l2xfDBcE",
      views: "457,906 views",
      year:"8 May 2013",
      desc:"Education advocate Geoffrey Canada dares the system to look at the data, think about the customers and make systematic shifts in order to help greater numbers of kids excel."
    },
    {
      title: "Why We Have Too Few Women Leaders",
      speaker: "Sheryl Sandberg",
      link: "https://www.youtube.com/embed/18uDutylDa4",
      views: "3,522,275 views",
      desc:"Facebook COO Sheryl Sandberg looks at why a smaller percentage of women than men reach the top of their professions -- and offers 3 powerful pieces of advice to women aiming for the C-suite."
    },
    {
      title: "Why Good Leaders Make You Feel Safe",
      speaker: "Simon Sinek",
      link: "https://www.youtube.com/embed/lmyZMtPVodo",
      views: "7,563,394 views",
      desc:"Management theorist Simon Sinek suggests, it's someone who makes their employees feel secure. But creating trust and safety especially in an uneven economy means taking on big responsibility."
    },
    {
      title: "Listen, Learn… Then Lead",
      speaker: "Stanley McChrystal",
      link: "https://www.youtube.com/embed/FmpIMt95ndU",
      views: "594,083 views",
      desc:"Four-star general Stanley McChrystal shares what he learned about leadership over his decades in the military. How can you build a sense of shared purpose among people of many ages and skill sets?"
    },
    {
      title: "The Power Of Vulnerability",
      speaker: "Brene Brown",
      link: "https://www.youtube.com/embed/iCvmsMzlF7o",
      views: "18,078,705 views",
      desc:"Brené Brown studies human connection -- our ability to empathize, belong, love. In a poignant, funny talk at TEDxHouston, she shares a deep insight from her research, one that sent her on a personal quest to know herself as well as to understand humanity. A talk to share."
    },
    {
      title: "A Better Way To Talk About Love",
      speaker: "Mandy Len Catron",
      link: "https://www.youtube.com/embed/zMWYQRKuc5M",
      views: "291,028 views",
      desc:"In love, we fall. We're struck, we're crushed, we swoon. We burn with passion. Love makes us crazy and makes us sick. Our hearts ache, and then they break. Talking about love in this way fundamentally shapes how we experience it. In this talk for anyone who's ever felt crazy in love."
    },
    {
      title: "Love – You’re Doing It Wrong",
      speaker: "Yann Dall’Aglio",
      link: "https://www.youtube.com/embed/dJgiYBdD2VA",
      views: "448,728 views",
      desc:"In this delightful talk, philosopher Yann Dall'Aglio explores the universal search for tenderness and connection in a world that's ever more focused on the individual. As it turns out, it's easier than you think. A wise and witty reflection on the state of love in the modern age."
    },
  ],

  MOTIVATIONAL: [
    {
      title: "The power of self-motivation",
      speaker: "Nakia Gelin",
      link: "https://www.youtube.com/embed/o05NaXMBKDI",
      views: "6,090 views",
      year:"2 Mar 2018",
      desc:"What if we all were self-motivated? When you are self-motivated, your bravery alone is enough to remain strong in various circumstances. Self-motivation is a quality that is essential for everyone that desires to be successful. "
    },
    {
      title: "The puzzle of motivation",
      speaker: "Dan Pink",
      link: "https://www.youtube.com/embed/rrkrvAUbU9Y",
      views: "10,345,330 views",
      year:"26 Aug 2009",
      desc:"Career analyst Dan Pink examines the puzzle of motivation, starting with a fact that social scientists know but most managers don't: Traditional rewards aren't always as effective as we think. Listen for illuminating stories and maybe, a way forward."
    },
    {
      title: "How to motivate yourself to change your behavior",
      speaker: "Tali Sharot",
      link: "https://www.youtube.com/embed/xp0O2vi8DX4",
      views: "13,451,654 views",
      year:"28 Oct 2014",
      desc:"What does make us change our actions? Tali Sharot reveals three ingredients to doing what's good for yourself.Dr. Tali Sharot is a neuroscientist at University College London and the director of the Affective Brain Lab. She is a faculty member of Psychology."
    },
  ],

  EDUCATIONAL: [
    {
      title: "Do Schools Kill Creativity?",
      speaker: "Sir Ken Robinson",
      link: "https://www.youtube.com/embed/iG9CE55wbtY",
      views: "21,639,257 views",
      year:"7 Jan 2007",
      desc:"Sir Ken Robinson makes an entertaining and profoundly moving case for creating an education system that nurtures (rather than undermines) creativity."
    },
    {
      title: "Teachers need real feedback",
      speaker: "Bill Gates",
      link: "https://www.youtube.com/embed/81Ub0SMxZQo",
      views: "2,372,492 views",
      year:"8 May 2013",
      desc:"Bill Gates suggests that even great teachers can get better with smart feedback and lays out a program from his foundation to bring it to every classroom."
    },
    {
      title: "Our Failing Schools. Enough is Enough",
      speaker: "Geoffrey Canada",
      link: "https://www.youtube.com/embed/vY2l2xfDBcE",
      views: "457,906 views",
      year:"8 May 2013",
      desc:"Education advocate Geoffrey Canada dares the system to look at the data, think about the customers and make systematic shifts in order to help greater numbers of kids excel."
    },
  ],
  RELATIONSHIP: [
    {
      title: "The Power Of Vulnerability",
      speaker: "Brene Brown",
      link: "https://www.youtube.com/embed/iCvmsMzlF7o",
      views: "18,078,705 views",
      desc:"Brené Brown studies human connection -- our ability to empathize, belong, love. In a poignant, funny talk at TEDxHouston, she shares a deep insight from her research, one that sent her on a personal quest to know herself as well as to understand humanity. A talk to share."
    },
    {
      title: "A Better Way To Talk About Love",
      speaker: "Mandy Len Catron",
      link: "https://www.youtube.com/embed/zMWYQRKuc5M",
      views: "291,028 views",
      desc:"In love, we fall. We're struck, we're crushed, we swoon. We burn with passion. Love makes us crazy and makes us sick. Our hearts ache, and then they break. Talking about love in this way fundamentally shapes how we experience it. In this talk for anyone who's ever felt crazy in love."
    },
    {
      title: "Love – You’re Doing It Wrong",
      speaker: "Yann Dall’Aglio",
      link: "https://www.youtube.com/embed/dJgiYBdD2VA",
      views: "448,728 views",
      desc:"In this delightful talk, philosopher Yann Dall'Aglio explores the universal search for tenderness and connection in a world that's ever more focused on the individual. As it turns out, it's easier than you think. A wise and witty reflection on the state of love in the modern age."
    },
  ],

  LEADERSHIP: [
    {
      title: "Why We Have Too Few Women Leaders",
      speaker: "Sheryl Sandberg",
      link: "https://www.youtube.com/embed/18uDutylDa4",
      views: "3,522,275 views",
      desc:"Facebook COO Sheryl Sandberg looks at why a smaller percentage of women than men reach the top of their professions -- and offers 3 powerful pieces of advice to women aiming for the C-suite."
    },
    {
      title: "Why Good Leaders Make You Feel Safe",
      speaker: "Simon Sinek",
      link: "https://www.youtube.com/embed/lmyZMtPVodo",
      views: "7,563,394 views",
      desc:"Management theorist Simon Sinek suggests, it's someone who makes their employees feel secure. But creating trust and safety especially in an uneven economy means taking on big responsibility."
    },
    {
      title: "Listen, Learn… Then Lead",
      speaker: "Stanley McChrystal",
      link: "https://www.youtube.com/embed/FmpIMt95ndU",
      views: "594,083 views",
      desc:"Four-star general Stanley McChrystal shares what he learned about leadership over his decades in the military. How can you build a sense of shared purpose among people of many ages and skill sets?"
    },
  ],
};

const KeyList = Object.keys(songList);

export default function App() {

  var [songs, set] = useState('ALL');
  function display(item){
    console.info(item);
    console.info(songList[item]);
    songs = item;
    set(songs);
  }

  return (
    <div className="App">
      <h1>TED<sup>X</sup> Talks Genre</h1>
      <h6>Here is the list of my favourite Ted Talk</h6>
      {/* <p style={{fontSize:"1.5rem", margin:"1rem"}}>PLEASE SELECT ANY GENRE YOU WANT</p> */}
      <div style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"}}>{
          KeyList.map((e)=>{
            return(
              <div>
              <button className='bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 border-b-4 border-red-900 hover:border-red-600 rounded' key={e} style={{margin: "2rem 5px",minWidth:"160px"}} onClick={()=>display(e)}>{e}</button>
            </div>
            )
          })
        }
      </div>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent: "space-evenly"}}>  
              {songList[songs].map((g) => {
                return (
                <div>
                {/* <span key={g.artists}>{g.artists}</span> */}
                <div className="max-w-sm rounded overflow-hidden shadow-lg border-4 border-red-700" style={{'margin-bottom': '1rem'}}>
                <iframe className="w-full" width="560" height="315" src={g.link} 
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div className="px-6 py-4">
                <div  key={g.speaker} className="font-bold text-xl mb-2">Speaker - {g.speaker}</div>
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

