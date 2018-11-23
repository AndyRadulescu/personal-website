import {Component, OnInit} from '@angular/core';
import {Message} from './message';

@Component({
    selector: 'app-section-email',
    templateUrl: './section-email.component.html',
    styleUrls: ['./section-email.component.scss']
})
export class SectionEmailComponent implements OnInit {
    public message: Message;

    constructor() {
    }

    ngOnInit() {
        this.message = new Message();
    }

}
