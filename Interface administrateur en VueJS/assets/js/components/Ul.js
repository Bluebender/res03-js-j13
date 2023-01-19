let Ul = {  
    data() {  
        return { 
        }  
    },
    props: [
        "lis"
        ]

    template: `  
        <ul>
            <li v-for="li in lis">{{ li }}</li>
        </ul>
    `
};  

export { Ul };