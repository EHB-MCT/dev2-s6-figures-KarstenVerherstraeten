"use strict";
import Circle from './Circle.js';
import Figure from './Figure.js';
import Rectangle from './Rectangle.js';
import Square from './Square.js';

const rectangle = new Rectangle('steven',50,100);
const circle = new Circle("bolly", 40);
const square = new Square("Jhonny",50);

const form = {
    changeSelect(e) {

    },
    init() {
       
        console.log('Form init!');
       
            // rectangle.htmlString;
            // circle.htmlString;
            // square.htmlString;
       document.querySelector('#form').addEventListener('submit', this.submitForm)

    },
    inputElementsWithLabel(label, id) {

    },
    submitForm(e) {
        e.preventDefault();
        rectangle.htmlString
        
    }
};

form.init();