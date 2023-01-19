let Nav = {  
    data() {  
        return { 
        }  
    },
    props: [
        "menus"
        ],

    template: `  
    <nav v-for="menu in menus">
        <h2 @click="ClassHidenAdd">{{ menu.title }}</h2>
        <ul>
            <li v-for="link in menu.links">{{ link }}</li>
        </ul>
    </nav>
    `

};  

export { Nav };