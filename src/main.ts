import "./style.css"

import eyeImage from "./assets/eye.png"
import gopherImage from "./assets/gopher.png"
import { setupEyes } from "./eyes.ts"

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <img src='${gopherImage}' id="gopher-image" alt="Gopher Image" />
    <div id="eyes">
      <img class="eye" src="${eyeImage}" style="bottom: 68px; left: 52px" alt="Gopher Left Eye">
      <img class="eye" src="${eyeImage}" style="bottom: 70px; left: 103px" alt="Gopher Right Eye">
    </div>
    <p class="read-the-docs">
      <a href="https://github.com/tty-monkey/gopher-eyes-follow">Source code</a>
    </p>
  </div>
`

setupEyes()
