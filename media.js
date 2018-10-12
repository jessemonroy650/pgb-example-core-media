var mediaPlugin = {
    version : '1.0.0',
    mediaObject : {},
    fileToPlay : '',

    // Let's just make sure the plugin is loaded.
    init : function () {
        document.getElementById('status0').innerHTML = "loading";
        document.getElementById('status1').innerHTML = typeof Media;
        document.getElementById('status2').innerHTML = Object.is(Media, Media);
    },
    // Per the documentation, this function is called when the audio file finishes.
    // On earlier versions of the plugin, this may not fire.
    fin : function () {
        document.getElementById('status').innerHTML = "success";
    },
    //
    err : function () {
        document.getElementById('status').innerHTML = "error-fail at new Media<br>" + JSON.stringify(err);
    },
    // Simple function: play until finished.
    play : function (audioFile) {
        mediaPlugin.fileToPlay = audioFile;
        mediaPlugin.mediaObject = new Media(mediaPlugin.fileToPlay, 
            mediaPlugin.fin, 
            mediaPlugin.err,
            function(status) { document.getElementById('status').innerHTML = status; }
        );
        document.getElementById('status3').innerHTML = "file loaded";
        mediaPlugin.mediaObject.play();
        document.getElementById('status4').innerHTML = "playing => " + mediaPlugin.fileToPlay;
    }
}

