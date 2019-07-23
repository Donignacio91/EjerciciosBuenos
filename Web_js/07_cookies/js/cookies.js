


export function setCookie(cname = '', cvalue , exdays = 0)  {
    let d = new Date();
    // del tiempo del de ahra mas las conversion que le he dicho
    d.setTime(d.getTime() + (exdays*24*60*60*1000)); 
    let expires = "expires="+ d.toUTCString();//lo convierto a formato utcString
    document.cookie = `${cname}  = ${cvalue}  ;${expires} ;path=/`;
  }
 export function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }