var app = {
    version : '1.0.0',
    audioFile : 'www/fanfare3.ogg', 
    wavFile   : 'www/ice_cream_truck.wav',

    // - https://videlais.com/2014/08/21/lessons-learned-from-detecting-apache-cordova/
    isCordovaApp : function () {
        return (typeof window.cordova !== "undefined");
    },
    //
    isKnownDevice : function (obj) {
        var validPGDevices = [
            'armv7',
            'iPad',
            'iPhone',
            'iPod'
        ];
        var i = 0, result = -1, answer = false;
        for (i = 0; i < validPGDevices.length; i++){
            // https://www.w3schools.com/jsref/jsref_search.asp
            result = obj.search(validPGDevices[i]);
            if (result != -1) {
                answer = validPGDevices[i]; break;
            }
        }
        return answer;
    },
    //
    onLoad : function () {
        //alert("body loaded.");
        // onDeviceReady();
    },
    //
    exitApp : function () {
        navigator.app.exitApp();
    },
    //
    hook : function () {
        document.getElementById('exitApp').addEventListener('touchend', app.exitApp, false);
        document.getElementById('playOther').addEventListener('touchend',
            function () { mediaPlugin.play(cordova.file.applicationDirectory + app.wavFile); },
            false);
        document.getElementById('playBuddy').addEventListener('touchend',
            function () { mediaPlugin.play(cordova.file.applicationDirectory + app.buddyFile); },
            false);
    },
    //
    onDOMContentLoaded : function () {
        document.getElementById('navCodeName').innerHTML = navigator.appCodeName;
        document.getElementById('navName').innerHTML     = navigator.appName;
        document.getElementById('navVersion').innerHTML  = navigator.appVersion;
        document.getElementById('navPlatform').innerHTML = navigator.platform;
        //
        app.hook();
    },
    //
    onDeviceReady : function () {
        //alert("device ready.");
        document.getElementById('isCordovaApp').innerHTML  = app.isCordovaApp();
        document.getElementById('isKnownDevice').innerHTML = app.isKnownDevice(navigator.platform);
        document.getElementById('appVersion').innerHTML    = app.version;
        document.getElementById('myDirectory').innerHTML   = cordova.file.applicationDirectory;

        if (app.isCordovaApp()) {
            devicePlugin.deviceStuff('deviceStuff');
            //
            // Play some sound
            //
            mediaPlugin.init();
            mediaPlugin.play(cordova.file.applicationDirectory + app.audioFile);
        }
    }
}
