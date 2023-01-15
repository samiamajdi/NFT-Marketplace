import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PinataService {

  private apiKey: string;
  private secret: string;

  constructor() {
    this.apiKey = '28a3e471d23b95e00208';
    this.secret = '2f7100884b9c442869232fcf242531bae2c35bc033eb56d48ba50ba68e6ba4f5';
  }

  async addToPinata(metadataBuffer: any): Promise<string> {
    const data = new FormData();
    data.append('file', metadataBuffer);
    // data.append('name',)
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'pinata_api_key': this.apiKey,
        'pinata_secret_api_key': this.secret
      }
    };

    const response = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', data,config
    );

    return response.data.IpfsHash;
  }
}
