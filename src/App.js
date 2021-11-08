// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;








import { useState } from "react";
import "./App.css";

export default function App() {
  const movies = [
    {
      name: "Master",
      pic:
        "https://upload.wikimedia.org/wikipedia/en/5/53/Master_2021_poster.jpg",
      Summary:
        "JD, an alcoholic professor, is enrolled to teach at a juvenile facility, unbeknownst to him. He soon clashes with a ruthless gangster, who uses the children as scapegoats for his crimes.",
      IMDb: "7.8/10",
      Moreinfo: "https://en.wikipedia.org/wiki/Master_(2021_film)"
    },
    {
      name: "Nerkonda Parvai",
      pic:
        "https://moviegalleri.net/wp-content/gallery/nerkonda-paarvai-movie-release-posters/nerkonda-paarvai-movie-release-posters-9817cd9.jpg",
      IMDb: "7.8/10",
      Summary:
        "A veteran lawyer comes out of retirement to help three women who have been falsely implicated in a criminal case. As he represents them in court, he faces powerful foes and patriarchal attitudes.",
      Moreinfo: "https://en.wikipedia.org/wiki/Nerkonda_Paarvai"
    },
    {
      name: "Soorarai Pottru",
      pic:
        "https://m.media-amazon.com/images/M/MV5BOGVjYmM0ZWEtNTFjNi00MWZjLTk3OTItMmFjMDAzZWU1ZDVjXkEyXkFqcGdeQXVyMTI2Mzk1ODg0._V1_.jpg",
      IMDb: "9.1/10",
      Summary:
        "Maara, a young man from a remote village, dreams of launching his own airline service. However, he must overcome several obstacles and challenges in order to be successful in his quest.",
      Moreinfo: "https://en.wikipedia.org/wiki/Soorarai_Pottru"
    },
    {
      name: "Peranbu",
      pic:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTLvEAl8l35Q4JBdUrW7s5VXTLm5VGpTQxQyfqvjeqEu2Rq-ewQ",
      IMDb: "8.9/10",
      Summary:
        "Amudhavan is dejected after his wife abandons him and their child, who has cerebral palsy. He struggles to take care of his daughter while society constantly rejects him.",
      Moreinfo: "https://en.wikipedia.org/wiki/Peranbu"
    },
    {
      name: "Vikram Vedha",
      pic: "https://wallpapercave.com/wp/wp6568611.jpg",
      IMDb: "8.3/10",
      Summary:
        "Vikram, a pragmatic policeman, and his partner Simon are on the hunt to capture Vedha. When Vedha voluntarily surrenders, he offers to tell Vikram a story, throwing Vikram's life into disarray.",
      Moreinfo: "https://en.wikipedia.org/wiki/Vikram_Vedha"
    },
    {
      name: "K.G.F - 1",
      pic:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/K.G.F_Chapter_1_poster.jpg/220px-K.G.F_Chapter_1_poster.jpg",
      IMDb: "8.3/10",
      Summary:
        "Rocky, a young man, seeks power and wealth in order to fulfil a promise to his dying mother. His quest takes him to Mumbai, where he gets involved with the notorious gold mafia.",
      Moreinfo: "https://en.wikipedia.org/wiki/K.G.F:_Chapter_1"
    },
    {
      name: "Kaithi",
      pic:
        "https://1.bp.blogspot.com/-5424IjDWk1w/XaMF-akblMI/AAAAAAAAPTc/7FGU9CQTcJIjl7mTUSMntIo6sKzbwRO5wCLcBGAsYHQ/s1600/Kaithi-Budget-Hit-or-Flop-Box-Office-Collection.jpg",
      IMDb: "8.5/10",
      Summary:
        "Dilli, an ex-convict, endeavours to meet his daughter for the first time after leaving prison. However, his attempts are interrupted due to a drug raid planned by Inspector Bejoy.",
      Moreinfo: "https://en.wikipedia.org/wiki/Kaithi_(2019_film)"
    },
    {
      name: "Vada Chennai",
      pic:
        "https://m.media-amazon.com/images/M/MV5BYWQ2YTgyOGMtNzUyYi00ZTA2LThiMTMtMDAzNjUxZjAzZTEzXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_.jpg",
      IMDb: "8.5/10",
      Summary:
        "A proficient carrom player sets foot in the world of crime and joins forces with local gangsters to settle their feuds. However, he decides to take them down when they plan to wipe out his locality",
      Moreinfo: "https://en.wikipedia.org/wiki/Vada_Chennai"
    },
    {
      name: "Charlie",
      pic:
        "https://m.media-amazon.com/images/M/MV5BMmZhMzVlNzEtMjQ3ZS00ZGJlLTk4N2YtMDIyNDNmZThhMGVmXkEyXkFqcGdeQXVyMzIyNDI4NjU@._V1_FMjpg_UX1000_.jpg",
      IMDb: "8/10",
      Summary:
        "Tessa runs away from home to avoid getting married and rents a room. She finds a sketchbook of the previous occupant, which reveals an incomplete story, and decides to find the artist.",
      Moreinfo: "https://en.wikipedia.org/wiki/Charlie_(2015_Malayalam_film)"
    },
    {
      name: "Nayakan",
      pic:
        "https://cdn.cinematerial.com/p/297x/lsx3viiw/nayakan-british-dvd-movie-cover-md.jpg?v=1456597035",
      IMDb: "8.7/10",
      Summary:
        "Velu Nayakan, who witnesses the brutal murder of his father, kills a corrupt policeman and escapes to Mumbai, only to become a gangster.",
      Moreinfo: "https://en.wikipedia.org/wiki/Nayakan"
    },
    {
      name: "Manik Baashha",
      pic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxZ6gSHuxjDlt9QfBWQQ_od-JXYA9A8WE__a2dixpIoTsy-y8e-czV8dZJ7i08B-nUcMA&usqp=CAU",
      IMDb: "8.3/10",
      Summary:
        "Rickshaw driver Manickam is a man who avoids violence at all costs. However, when his brother, a cop, gets into trouble with some goons, it triggers a set of events that revive Manickam's old self.",
      Moreinfo: "https://en.wikipedia.org/wiki/Baashha"
    },
    {
      name: "Pudhupettai",
      pic:
        "https://alchetron.com/cdn/Pudhupettai-images-6adfcb28-d42a-4491-8f2a-d6452964296.jpg",
      IMDb: "8.5/10",
      Summary:
        "Rickshaw driver Manickam is a man who avoids violence at all costs. However, when his brother, a cop, gets into trouble with some goons, it triggers a set of events that revive Manickam's old self.",
      Moreinfo: "https://en.wikipedia.org/wiki/Pudhupettai"
    }
  ];
  return (
    <div className="App">
      {movies.map((ur) => (
        <Msg
          name={ur.name}
          pic={ur.pic}
          IMDb={ur.IMDb}
          Summary={ur.Summary}
          Moreinfo={ur.Moreinfo}
        />
      ))}
    </div>
  );
}

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
// function count(){
// const [like, setLike] = useState(0);
// return(
//   <div>
//     <button
//       onClick={()=>{
//         setLike(like+1);
//       }}
//       >
//         like
//       </button>
//       <p>{like}</p>
//   </div>
// );
// }
function Msg({ name, pic, IMDb, Summary, Moreinfo }) {
  return (
    <div>
      <div className="container">
        <div className="withimg">
          <h1 className="top">{name}</h1>
          <img className="poster" src={pic} alt={name} />
        </div>
        <p className="para">
          <b> Overview : </b>
          {Summary}
          <span className="blink">⭐ {IMDb} </span>
          <a href={Moreinfo}>More Info</a>
        </p>
      </div>
    </div>
  );
}