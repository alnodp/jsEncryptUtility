import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { JSEncrypt } from 'jsencrypt';

@Injectable({
    providedIn: 'root'
})
export class EncryptService {

    constructor() { }

    encryptData(value: any) {
        const encrypt = new JSEncrypt();
        encrypt.setPublicKey(environment.publicKey);
        return encrypt.encrypt(value);
    }
}
