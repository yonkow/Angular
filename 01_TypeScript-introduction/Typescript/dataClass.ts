class Data {
    method: string;
    uri: string;
    version: string;
    message: string;
    response: string = 'undefined';
    _fulfilled: boolean = false;

    constructor(method: string, uri: string, version: string, message: string) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
    }

    print(): string {
        return `{ method: '${this.method}',
uri: '${this.uri}',
version: '${this.version}}',
message: '${this.message}',
response: ${this.response},
fulfilled: ${this._fulfilled} }`
    }
}

let myData = new Data('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData.print());