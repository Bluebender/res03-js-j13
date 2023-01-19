let Nav = {  
    data() {  
        return { 
            // lis : ["Accueil", "A propos", "Contact"]
        }  
    },  
    props: [
            "lis"
        ], 
    
    template: `  
        <ul>
            <li v-for="li in lis">{{ li }}</li>
        </ul>
    `
};  

export { Nav };