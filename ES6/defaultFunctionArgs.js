//default function arguments are used to assign arugments to a value incase it is not
//specified when the function is called


function makeAjaxRequest(url, method = 'GET') {
  return method;
  //logic to make request
}

makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'POST');
