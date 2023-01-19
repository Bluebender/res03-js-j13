import { Ul } from "./Ul.js";

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
        Ul
    },

    template: `  
            <aside id="menu_nav">
                <nav v-for="menu in menus">
                    <h2>{{ menu.title }}</h2>
                    <Ul :lis="this.menus.links" />
                </nav>
            </aside>

    `
};  

export { Aside };