import Figure from "./Figure.js";

export default class Rectangle extends Figure{
    constructor(name,width,heigt){

        super(name);
        this.width = width;
        this.heigt = heigt;
    }

    get area(){
        return(this.width * this.heigt);
    }

    get circumference(){
        return(this.width + this.heigt) * 2;
    }

    get htmlString(){
        document.querySelector("#results").innerHTML = `<div class="result">
        <div class="figure rectangle" style="width: WIDTHpx; height: HEIGHTpx;"></div>
        <div class="infoBox">
          <h3>${this.name}</h3>
          <dl>
            <dt>Height</dt>
            <dd>${this.heigt} px</dd>
      
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