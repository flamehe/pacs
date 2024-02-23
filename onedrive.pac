var domains = {
    "onedrive.com": 1,
    "onedrive.com": 1,
    "onedrive.live.com": 1,
    "login.live.com": 1,
    "g.live.com": 1,
    "spoprod-a.akamaihd.net": 1,
    "mesh.com": 1,
    "p.sfx.ms": 1,
    "oneclient.sfx.ms": 1,
    "microsoft.com": 1,
    "fabric.io": 1,
    "crashlytics.com": 1,
    "vortex.data.microsoft.com": 1,
    "posarprodcssservice.accesscontrol.windows.net": 1,
    "redemptionservices.accesscontrol.windows.net": 1,
    "token.cp.microsoft.com": 1,
    "tokensit.cp.microsoft-tst.com/": 1,
    "office.com": 1,
    "officeapps.live.com": 1,
    "aria.microsoft.com": 1,
    "mobileengagement.windows.net": 1,
    "branch.io": 1,
    "adjust.com": 1,
    "servicebus.windows.net": 1,
    "vas.samsungapps.com": 1,
    "odc.officeapps.live.com": 1,
    "login.windows.net": 1,
    "login.microsoftonline.com": 1,
    "files.1drv.com": 1,
    "onedrive.live.com": 1,
    "storage.live.com": 1,
    "groups.office.live.com": 1,
    "groups.photos.live.com": 1,
    "groups.skydrive.live.com": 1,
    "favorites.live.com": 1,
    "oauth.live.com": 1,
    "photos.live.com": 1,
    "skydrive.live.com": 1,
    "api.live.net": 1,
    "apis.live.net": 1,
    "docs.live.net": 1,
    "docs.live.net": 1,
    "policies.live.net": 1,
    "policies.live.net": 1,
    "settings.live.net": 1,
    "settings.live.net": 1,
    "skyapi.live.net": 1,
    "snapi.live.net": 1,
    "livefilestore.com": 1,
    "livefilestore.com": 1,
    "storage.msn.com": 1,
    "storage.msn.com": 1,
    "storage.msn.com": 1
};
 
var proxy = "HTTP 127.0.0.1:10809";
 
var direct = 'DIRECT;';
 
function FindProxyForURL(url, host) {
    var lastPos;
    do {
        if (domains.hasOwnProperty(host)) {
            return proxy;
        }
        lastPos = host.indexOf('.') + 1;
        host = host.slice(lastPos);
    } while (lastPos >= 1);
    return direct;
}