import { Component } from '@angular/core';
import {EncryptService} from './services/encrypt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    valueToEncrypt = '';
    valueEncrypted = '';

    constructor(private encryptService: EncryptService) {}

    encrypt() {
        this.valueEncrypted = this.encryptService.encryptData(this.valueToEncrypt);
        console.log('valueEncrypted = ', this.valueEncrypted);
    }
}
