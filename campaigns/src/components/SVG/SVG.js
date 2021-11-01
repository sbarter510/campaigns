// import React from "react";
// import RINGS from "../../../node_modules/vanta/dist/vanta.rings.min.js";

// export default function SVG() {
//   RINGS({
//     el: "#bg",
//     mouseControls: true,
//     touchControls: true,
//     gyroControls: false,
//     minHeight: 800.0,
//     minWidth: 300.0,
//     scale: 1.0,
//     scaleMobile: 1.0,
//     backgroundColor: 0xffffff,
//   });
//   return <div id="bg"></div>;
// }

import React, { useState, useEffect, useRef } from "react";
import RINGS from "vanta/dist/vanta.rings.min";
import * as THREE from "three/build/three";
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

export default function SVG(props) {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        RINGS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 300.0,
          minWidth: 300.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0xffffff,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return <div ref={myRef}></div>;
}
