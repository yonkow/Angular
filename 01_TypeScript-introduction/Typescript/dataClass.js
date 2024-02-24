var Data = /** @class */ (function () {
    function Data(method, uri, version, message) {
        this.response = 'undefined';
        this._fulfilled = false;
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
    }
    Data.prototype.print = function () {
        return "{ method: '".concat(this.method, "',\nuri: '").concat(this.uri, "',\nversion: '").concat(this.version, "}',\nmessage: '").concat(this.message, "',\nresponse: ").concat(this.response, ",\nfulfilled: ").concat(this._fulfilled, " }");
    };
    return Data;
}());
var myData = new Data('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData.print());
