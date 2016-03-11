// http://stackoverflow.com/questions/35336019/angular2-with-jquery-ui-slider

import {Component} from 'angular2/core';
import {ElementRef} from "angular2/core";
import {Inject} from "angular2/core";

declare var jQuery:any;
declare var Slider:any;

@Component({
    selector: 'angular-slider',
    template: `
    <input id="ex1" data-slider-id='ex1Slider' type="text" data-slider-min="0" data-slider-max="20" data-slider-step="1" data-slider-value="14"/>
    <h3>Slider Value: {{sliderValue}}</h3>
    `
})


export class SliderComponent {
    public  sliderValue:number[];
    elementRef:ElementRef;

    constructor(@Inject(ElementRef) elementRef:ElementRef) {
        this.elementRef = elementRef;
    }

    onSlider(v:number[]) {
        this.sliderValue = v;
    }

    ngOnInit() {
        var component = this;
        var slider = new Slider("#ex1", {min: 1500, max: 1986, value: [1735, 1923]});
        slider.on("slide", function (val:number[]) {
            component.onSlider(val);
        })
    }
}

