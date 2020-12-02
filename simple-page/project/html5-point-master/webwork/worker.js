importScripts('./utils.js');

function sendSatus(statusText){
  postMessage({
    type : 'status',
    statusText
  })
}

function messageHandler(e){
  let messageType = e.data.type;
}