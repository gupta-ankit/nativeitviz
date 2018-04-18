/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import "./bundle-config";
import * as application from 'application';

import * as tnsOAuthModule from 'nativescript-oauth';

var fitbitInitOptions : tnsOAuthModule.ITnsOAuthOptionsFacebook = {
    clientId: '1119818654921555',
    clientSecret: 'bbb58f212b51e4d555bed857171c9aaa',
    scope: ['profile'] //whatever other scopes you need
};

tnsOAuthModule.initFacebook(fitbitInitOptions);

application.run({ moduleName: 'app-root' });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
