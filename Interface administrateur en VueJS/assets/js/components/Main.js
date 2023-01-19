import { Aside } from "./Aside.js";

let Main = {  
    data() {  
        return { 
        }  
    },  
    components :{
        Aside
    },
    template: `  
          <main>
            <Aside />
            <section id="section1">
                <h2>Liste des utilisateurs</h2>
                <section>
                    <h3 class="sr-only">Ajouter un utilisateur</h3>
                    <button class="add-btn" id="add-user-btn"><span class="bi-person-fill-add"></span> Ajouter un utilisateur</button>
                </section>
                <section>
                    <h3 class="sr-only">Les données</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    Nom
                                </th>
                                <th>
                                    Age
                                </th>
                                <th>
                                    Actif
                                </th>
                                <th>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody id="tbody">
        
                        </tbody>
                    </table>
                </section>
            </section>
            <section id="section2" class="masked">
              <article>
                <header>Êtes-vous sûr-e de vouloir supprimer cet utilisateur ?</header>
                <p id="userToDelete"></p>
                <footer>
                  <button id="boutonAnnulerSuppression">Annuler</button>
                  <button>Supprimer</button>
                </footer>
              </article>      
            </section>
          </main>
    `
};  
  
export { Main };