import { Injectable } from '@angular/core';

export const backendIp="13.90.246.223";
export const backendPort="443";
//export const backendIp="127.0.0.1";
//export const backendPort="8000";
export const useHttps=false

@Injectable()
export class Globals {
  isUserLogged: boolean = false;
  emailUser: string;
  username: string;
}