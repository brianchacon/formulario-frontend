const baseUrl = 'http://localhost:8081';

export const loginRequest = (params:any) =>{

    let urlEndpoint = baseUrl+ '/user/login';

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify(params);
      
      var requestOptions:RequestInit = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
    return fetch(urlEndpoint, requestOptions).then(res => res.json());
}

export const createAccountRequest = (params:any) =>{

  let urlEndpoint = baseUrl+ '/user/create';
  //let urlEndpoint = baseUrl+ '/util/app/{type}/user/create';

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify(params);
    
    var requestOptions:RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  return fetch(urlEndpoint, requestOptions).then(res => res.json());
}

/* Crea la cuenta administradora de un plan de app */
export const createMainAppAccountRequest = (params:any) =>{

  let urlEndpoint = baseUrl+ '/user/create';
  //let urlEndpoint = baseUrl+ '/util/klommerce/user/create';

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify(params);
    
    var requestOptions:RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  return fetch(urlEndpoint, requestOptions).then(res => res.json());
}

export const paymentAll = (params:any) =>{
  return request(baseUrl+'/payment/getAllByRange',params);
};

export const klommerceAccountAll = (params:any) =>{
  return request(baseUrl+'/client/getAll',params);
};

export const productsByUser = (params:any) =>{
  return request(baseUrl+'/product/getAll',params);
};

export const plansGetAll = (params:any) =>{
  return request(baseUrl+'/plan/getAll',params);
};
export const sendMailRequest = (params:any) =>{

  let urlEndpoint = baseUrl+ '/utility/mail';

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify(params);
    
    var requestOptions:RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  return fetch(urlEndpoint, requestOptions).then(res => res.json());
}

export const request = (url:any,params:any) =>{
  var raw = params== null? null:JSON.stringify(params);

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json"); 

  
  var requestOptions:RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  return fetch(baseUrl+url, requestOptions).then(res => res.json());
}

export const registrosPorUrl = (url:any,params:any) =>{
  return request(url,params);
}