// import React, { useState, useEffect } from "react";
// import styled from "styled-components";

// import "../../css/MyMusicList.css"

// let loadYT;
// export default class MyMusicList extends React.Component{
//   constructor(props) {
//     super(props);
//     this.init();
//     this.video = '1cH2cerUpMQ' //video id

//     window['onYouTubeIframeAPIReady'] = (e) => {
//       this.YT = window['YT'];
//       this.reframed = false;
//       this.player = new window['YT'].Player('player', {
//         videoId: this.video,
//         events: {
//           'onStateChange': this.onPlayerStateChange.bind(this),
//           'onError': this.onPlayerError.bind(this),
//           'onReady': (e) => {
//             if (!this.reframed) {
//               this.reframed = true;
//               reframe(e.target.a);
//             }
//           }
//         }
//       });
//     };
//   }

  
//   render(){
//     return (
//     <div>
//       <div id="player"></div>
//     </div>
//     );
//   }
//   init() {
//     var tag = document.createElement('script');
//     tag.src = 'https://www.youtube.com/iframe_api';
//     var firstScriptTag = document.getElementsByTagName('script')[0];
//     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//   }
// }



// ReactDOM.render(
//   <MyMusicList />,
//   document.getElementById('player')
// );