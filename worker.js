


self.addEventListener('message', function (e) {

    var message = e.data

    this.self.postMessage(message + ' -Processed!')



})



self.postMessage('READY')