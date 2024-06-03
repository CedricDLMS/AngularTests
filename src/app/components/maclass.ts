import { NgModel } from "@angular/forms";

export default class voiture{
    // prpté
    imgLink : string;
    Width : number;
    Height : number;
    constructor(url : string, width : number,height:number){

        this.imgLink = url;
        this.Width = width;
        this.Height = height;
    }
}