import {Component, OnInit} from '@angular/core';
import {Message} from './message';

@Component({
    selector: 'app-section-email',
    templateUrl: './section-email.component.html',
    styleUrls: ['./section-email.component.scss']
})
export class SectionEmailComponent implements OnInit {
    public message: Message;
    public submitted = false;

    constructor() {
    }

    ngOnInit() {
        this.message = new Message();
    }

    onSubmit(data: any) {
        console.log(data);
        this.submitted = true;
    }

}
