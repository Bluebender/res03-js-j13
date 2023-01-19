import { Nav } from "./Nav.js";

let Aside = {  
    data() {  
        return { 
            menus : [
                {
                    title : "UTILISATEURS",
                    links : ["LISTE DES UTILISATEURS", "AJOUTER UN UTILISATEUR", "STATISTIQUES UTILISATEURS"]
                },
                {
                    title : "PRODUITS",
                    links : ["LISTE DES PRODUITS", "AJOUTER UN PRODUIT", "STATISTIQUES DES PRODUITS"]
                },                
                {
                    title : "CATEGORIE",
                    links : ["LISTE DES CATÉGORIES DE PRODUITS", "AJOUTER UNE CATÉGORIE DE PRODUITS"]
                }                
                ]
        }  
    },  
    components :{
        Nav
    },

    template: `  
            <aside id="menu_nav">
                <Nav :menus="this.menus" />
            </aside>

    `
};  

export { Aside };