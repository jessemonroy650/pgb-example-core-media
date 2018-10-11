var devicePlugin = {
    version : '1.0.0',

    deviceStuff : function (divId) {
        var deviceStuff = "" +
        "<p class=r /><b>device.cordova:</b> "       + device.cordova +
        "<p class=g /><b>device.model:</b> "         + device.model +
        "<p class=b /><b>device.platform:</b> "      + device.platform +
        "<p class=a id=uuid /><b>device.uuid:</b> "  + device.uuid +
        "<p class=p /><b>device.version:</b> "       + device.version +
        "<p class=r /><b>device.manufacturer:</b> "  + device.manufacturer +
        "<p class=g /><b>device.isVirtual:</b> "     + device.isVirtual +
        "<p class=b /><b>device.serial:</b> "        + device.serial;
 
        document.getElementById(divId).innerHTML = deviceStuff;
    }
}