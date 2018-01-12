import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { NgxEditorModule } from 'ngx-editor';

@Component({
    templateUrl: 'app/Components/slider.component.html'
})

export class SliderComponent {
    items: Array<any> = [];

    constructor() {
    this.items = [
        { name: '../../images/02.jpg' },
        { name: '../../images/03.jpg' },
        { name: '../../images/04.jpg' },
        { name: '../../images/05.jpg' },
        { name: '../../images/06.jpg' },
        { name: '../../images/07.jpg' }
       ]
    }
    /*items: string[] = ['../../images/02.jpg',
        '../../images/03.jpg',
        '../../images/04.jpg',
        '../../images/05.jpg',
        '../../images/06.jpg',
        '../../images/07.jpg'];

    public config: ICarouselConfig = {
        verifyBeforeLoad: true,
        log: false,
        animation: true,
        animationType: AnimationConfig.SLIDE,
        autoplay: true,
        autoplayDelay: 2000,
        stopAutoplayMinWidth: 768
    };*/
}