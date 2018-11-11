import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    facebookImgSrc = '/assets/facebook-logo-white.svg';
    linkedinImgSrc = '/assets/linkedin-logo-white.svg';
    instagramImgSrc = '/assets/instagram-logo-white.svg';
    githubImgSrc = '/assets/github-logo-white.png';

    constructor() {
    }

    ngOnInit() {
    }

    onMouseOver(socialApp) {
        switch (socialApp) {
            case 'facebook':
                this.facebookImgSrc = '/assets/facebook-logo.svg';
                break;
            case 'linkedin':
                this.linkedinImgSrc = '/assets/linkedin-logo.svg';
                break;
            case 'instagram':
                this.instagramImgSrc = '/assets/instagram-logo.svg';
                break;
            case 'github':
                this.githubImgSrc = '/assets/github-logo.png';
                break;
        }
    }

    onMouseOut(socialApp) {
        switch (socialApp) {
            case 'facebook':
                this.facebookImgSrc = '/assets/facebook-logo-white.svg';
                break;
            case 'linkedin':
                this.linkedinImgSrc = '/assets/linkedin-logo-white.svg';
                break;
            case 'instagram':
                this.instagramImgSrc = '/assets/instagram-logo-white.svg';
                break;
            case 'github':
                this.githubImgSrc = '/assets/github-logo-white.png';
                break;
        }
    }
}
