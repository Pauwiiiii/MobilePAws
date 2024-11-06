import { Injectable } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  /**
   * Performs HTTP GET request.
   */
  async get(url: string, { ...params } = {}, { ...headers } = {}) {
    return new Promise((resolve, reject) => {
      CapacitorHttp.request({
        url: url,
        method: 'get',
        params: params,
        headers: headers
      })
      .then(e => {
        if (e.status == 200)
          resolve(e.data);
        else
          reject(e);
      })
      .catch(e => {
        console.error('Error: ', e);
        reject(`Error: ${e}`);
      });
    });
  }

  /**
   * Performs HTTP POST request with JSON body.
   */
  
  async post(url: string, data: any = {}, headers: any = {}) {
    return new Promise((resolve, reject) => {
      CapacitorHttp.request({
        url: url,
        method: 'POST',
        data: data,  // Use `data` here instead of `params`
        headers: { 'Content-Type': 'application/json', ...headers }
      })
        .then(response => {
          if (response.status === 200) {
            resolve(response.data);
          } else {
            reject(response);
          }
        })
        .catch(error => {
          console.error('Error:', error);
          reject(`Error: ${error}`);
        });
    });
  }
}
