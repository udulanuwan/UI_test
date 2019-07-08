// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  fakeAPI:  'https://jsonplaceholder.typicode.com',
  firebase : {
    apiKey: 'AIzaSyBczvAU4LCgq6IUbLYZYz8WdCuslQT23fU',
    authDomain: 'ui-test-3c99f.firebaseapp.com',
    databaseURL: 'https://ui-test-3c99f.firebaseio.com',
    projectId: 'ui-test-3c99f',
    storageBucket: '',
    messagingSenderId: '461364963454',
    appId: '1:461364963454:web:151f293f4c52c92f'
  }
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
