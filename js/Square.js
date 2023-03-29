import Figure from "./Figure.js";
import Rectangle from "./Rectangle.js";

export default class Square extends Rectangle{
    constructor(name,width){
        super(name, width, width);
    }

    get htmlString(){
        document.querySelector("#results").innerHTML = `<div class="result">
        <div class="figure rectangle" style="width: WIDTHpx; height: HEIGHTpx;"></div>
        <div class="infoBox">
          <h3>${this.name}</h3>
          <dl>
            <dt>Height</dt>
            <dd>${this.width} px</dd>
      
            <dt>Width</dt>
            <dd>${this.width} px</dd>
      
            <dt>Area</dt>
            <dd>${this.area} px</dd>
      
            <dt>Circumference</dt>
            <dd>${this.circumference} px</dd>
          </dl>
        </div>
      </div>`
    }
}