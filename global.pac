var domains = {

};
 
var proxy = "PROXY 127.0.0.1:10809";
 
var direct = 'DIRECT;';
 
function FindProxyForURL(url, host) {
    return proxy;
}