export class App{
 
    constructor(){
        console.log('app runs')
        this.btnIn = document.querySelector('#ini')
        this.btnVac = document.querySelector('#vac')
        this.btnRec = document.querySelector('#rec')
        this.btnMos = document.querySelector('#mos')
        this.out = document.querySelector('#out')
        
        this.btnIn.addEventListener('click', setCookie)
        this.btnVac.addEventListener('click', reset)
        this.btnMos.addEventListener('click', setCookie)
        this.btnRec.addEventListener('click', )
        this.cname = ''
        this.cvalue = ''
        this.expires = ''
    }
    reset(){
        this.out.textContent = '00'
    }

     setCookie(cname, cvalue, exdays) {
        let d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        this.cname = cname
        this.cvalue = cvalue
        this.expires = expires 
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        
      }
      getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }
}    