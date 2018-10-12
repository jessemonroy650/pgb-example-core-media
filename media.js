var mediaPlugin = {
    version : '1.0.0',
    mediaObject : {},
    fileToPlay : '',

    init : function () {
        document.getElementById('status0').innerHTML = "loading";
        document.getElementById('status1').innerHTML = typeof Media;
        document.getElementById('status2').innerHTML = Object.is(Media, Media);
    },
    //
    playIt : function () {
        document.getElementById('status').innerHTML = "success";
    },
    //
    play : function (audioFile) {
        mediaPlugin.fileToPlay = audioFile;
        try {
            mediaPlugin.mediaObject = new Media(mediaPlugin.fileToPlay, 
                mediaPlugin.playIt, 
                function(err) { document.getElementById('status').innerHTML = "error-fail at new Media<br>" + JSON.stringify(err); },
                function(status) { document.getElementById('status').innerHTML = status; }
            );
        } catch (e) {
            //junky = e instanceof ReferenceError;
            junky = e.message + "<br>";
            junky = junky + e.name + "<br>";
            junky = junky + e.fileName + "<br>";
            junky = junky + e.lineNumber + "<br>";
            junky = junky + e.columnNumber + "<br>";
            junky = junky + e.stack + "<br>";
            document.getElementById('status2').innerHTML = junky
        }
        document.getElementById('status3').innerHTML = "file loaded";
        mediaPlugin.mediaObject.play();
        document.getElementById('status4').innerHTML = "playing => " + mediaPlugin.fileToPlay;
    }
}

