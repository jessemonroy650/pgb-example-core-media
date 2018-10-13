# pgb-example-core-media
Phonegap Build example for core plugin Cordova 'Media' using `cli-7.0.1`

This app uses the Cordova 'Device' & 'Media' plugins. The 'File' plugin is add for support. The 'Compat' (Compatibility) plugin is being deprecated; there is no scheduled removable date yet.

* https://www.npmjs.com/package/cordova-plugin-device
* https://www.npmjs.com/package/cordova-plugin-media
* https://www.npmjs.com/package/cordova-plugin-file (This is loaded by phonegap build. You do not need to add it.)
* https://www.npmjs.com/package/cordova-plugin-compat (This is loaded also, but stops with cli-7.1.0.)

Besides creating the [Media](https://www.npmjs.com/package/cordova-plugin-media#media) object this app will only use the *[play](https://www.npmjs.com/package/cordova-plugin-media#mediaplay)* method.

This example app is one of the most troublesome to date. It has multiple issues that will ensnare both beginning and experienced developers. A summary of the issues is below in the section GOTCHA. A more complete description is available on the blog for this code release.

## Debugging Note

The *load order* and *event order* of webview based apps is as follows:

1. Body
2. DOMContentLoaded
3. deviceready

Cordova/Phonegap hooks the `deviceready` event after *DOMContentLoaded*. [This Mozilla page](https://developer.mozilla.org/en-US/docs/Web/Events) on events points to the best known events.

## GOTCHA

All the following issues are discussed in depth in the blog

+ No warning when plugins do NOT load into the final bundle.
+ Android security changes require using at least `cli-7.0.1`.
+ With `cli-7.0.1`, a new "builder" is used by default.
+ The path to files within the APK bundle (and as installed) has changed. The path is inline with how Cordova CLI and Phonegap CLI do it.
+ When an error for plugin is given, it is in *Phonegap Android Version* which is not the same as *Phonegap Build* and can be very confusing.
+ The "File" plugin is loaded  after 'Media' Plugin `x.x.x`
+ `AndroidPersistentFileLocation` may or may not effect your app. It is indirectly related to the 'File' plugin.
+ `cordova-plugin-compat` is installed in early version of the Media plugin.
+ Android may report that your new app (APK) is corrupt. If this happens the work around is to uninstall the previously installed app.
+ You may be unable to disable the *Android System WebView* on your device. 
+ The RELEASE notes for Media plugin `2.2.0` says it added a "permision helper", but it may have been back patched to Media plugin `2.1.0`
    * [CB-10455](https://issues.apache.org/jira/browse/CB-10455) android: Adding permission helper to remove `cordova-android 5.0.0` constraint

Compatibility issues within Android require the following `config.xml` setting.

    <preference name="phonegap-version" value="cli-7.1.0" />
    <plugin name="cordova-plugin-media" spec="~5.2.0" />


However, lowest workable version are:

    <preference name="phonegap-version" value="cli-7.0.1" />
    <plugin name="cordova-plugin-media" spec="~2.1.0" />

...