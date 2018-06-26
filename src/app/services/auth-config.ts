import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  // Url of the Identity Provider
  issuer: 'https://auth-dev.46.249.93.103.nip.io}/oauth/authorize',

  // URL of the app to redirect the user to after login
  redirectUri: window.location.origin + '/index.html',

  // The client id. The app is registerd with this id at the auth-server
  clientId: 'Challenge Me',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC.
  scope: 'openid profile email'
}
