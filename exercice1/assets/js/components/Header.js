import { Nav } from "./Nav.js";  


let Header = {  
    data() {  
        return { 
            lis : ["Accueil", "A propos", "Contact"]
        }  
    },
    components : {  
      Nav
    },
    template: `  
        <header>
            <Nav :lis="this.lis"/>
        </header>
    `
};  
  
export { Header };