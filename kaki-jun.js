import { KVGAnimator } from "./dist/KanjivgAnimate.js";
import { createKanjivg } from "./createKanjivg.js";

export class KakiJun extends HTMLElement {
  constructor(ch) {
    super();
    this.style.display = "inline-block";
    this.init(ch);
  }
  async init(ch) {
    ch = ch || this.textContent || this.getAttribute("ch");
    this.textContent = "";
    console.log(ch)
    for (const c of ch) {
      const svg = await createKanjivg(c);
      svg.style.width = "100px";
      svg.style.display = "inline-block";
      this.appendChild(svg)
      const ka = new KVGAnimator(500);
      ka.play(svg);
      svg.onclick = () => {
        ka.play(svg);
      };
    }
  }
}

customElements.define("kaki-jun", KakiJun);
