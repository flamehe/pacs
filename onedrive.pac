var proxy = "PROXY 127.0.0.1:10809";
 
var direct = 'DIRECT;';
 
function FindProxyForURL(url, host) {
    if (shExpMatch(url, "*live.com*") ||
        shExpMatch(url, "*akamaihd.net*") ||
        shExpMatch(url, "*mesh.com*") ||
        shExpMatch(url, "*sfx.ms*") ||
        shExpMatch(url, "*microsoft.com*") ||
        shExpMatch(url, "*fabric.io*") ||
        shExpMatch(url, "*accesscontrol.windows.net*") ||
        shExpMatch(url, "*microsoft-tst.com*") ||
        shExpMatch(url, "*office.com*") ||
        shExpMatch(url, "*office.net*") ||
        shExpMatch(url, "*windows.net*") ||
        shExpMatch(url, "*branch.io*") ||
        shExpMatch(url, "*adjust.com*") ||
        shExpMatch(url, "*microsoftonline.com*") ||
        shExpMatch(url, "*1drv.com*") ||
        shExpMatch(url, "*live.net*") ||
        shExpMatch(url, "*livefilestore.com*") ||
        shExpMatch(url, "*msn.com*") ||
        shExpMatch(url, "*sharepoint.com*")
    ) {
       return proxy;
    }
    return direct;
}
