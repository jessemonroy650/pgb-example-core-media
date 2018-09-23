# pgb-example-core-media
Phonegap Build Example using the core plugin "media"

This app uses the Cordova "device" & "media" plugins.

* https://www.npmjs.com/package/cordova-plugin-device
* https://www.npmjs.com/package/cordova-plugin-media
* https://www.npmjs.com/package/cordova-plugin-file (This is loaded by phonegap build. You do not need to add it.)

Besides creating the [Media](https://www.npmjs.com/package/cordova-plugin-media#media) object this app will only use the *[play](https://www.npmjs.com/package/cordova-plugin-media#mediaplay)* method.

## GOTCHA

Compatibility issues within Android require 

    <preference name="phonegap-version" value="cli-7.1.0" />

