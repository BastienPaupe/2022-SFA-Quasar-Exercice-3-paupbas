// State : données du magasin
import { uid } from 'quasar'

const state = {
  plats: [
    {
      id: 1,
      image: 'https://i.imgur.com/0umadnY.jpg',
      nom: 'Burger',
      description: "Un hamburger est un sandwich composé d'une ou plusieurs tranches de viande hachée, généralement du bœuf, placées dans un petit pain ou une brioche.",
      note: 4
    },
    {
      id: 2,
      image: 'https://i.imgur.com/b9zDbyb.jpg',
      nom: 'Pizza',
      description: "La pizza est un plat savoureux d'origine italienne, consistant en une base généralement ronde et aplatie de pâte levée à base de blé.",
      note: 5
    },
    {
      id: 3,
      image: 'https://i.imgur.com/RbKjUjB.jpg',
      nom: 'Petits choux',
      description:
      'Le chou de Bruxelles est une variété de chou, plante herbacée de la famille des Brassicaceae. C’est vraiement pas bon...',
      note: 1
    },
    {
      id: 4,
      image: 'https://i.imgur.com/xAuhNVg.jpg',
      nom: 'BBQ Ribs',
      description: 'Les BBQ ribs ou barbecue ribs sont des grands classiques très appréciés partout dans le monde.',
      note: 5
    }
  ]
}

/*
Mutations : méthode qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {
  supprimerPlat (state, id) {
    // Filtre les données du tableau
    // et garde les tâches dont l'id est différent de celui à supprimer
    state.plats = state.plats.filter(el => el.id !== id)
  },
  ajouterPlat (state, plat) {
    state.plats.push(plat)
  },
  modifierPlat (state, plat) {
    // Recherche le plat et retourne sa position dans le tableau, son index
    const index = state.plats.findIndex(el => el.id === plat.id)
    console.log(index, typeof plat.id)
    // Si une tâche a été trouvée
    if (index !== -1) {
      // Modifie l'objet trouvé avec les nouvelles valeurs
      Object.assign(state.plats[index], plat)
    }
  }
}

/*
Actions : méthodes du magasin qui font appel aux mutations
Elles peuvent être asynchrones !
 */
const actions = {
  supprimerPlat ({ commit }, id) {
    console.log('action supprimerTache')
    commit('supprimerPlat', id)
  },
  ajouterPlat ({ commit }, plat) {
    const Id = uid()
    plat.id = Id
    // Commite l'ajout
    commit('ajouterPlat', plat)
  },
  modifierPlat ({ commit }, plat) {
    commit('modifierPlat', plat)
  }
}

/*
Getters : retourne les données du magasin
Fonctionne comme les propriétés calculées
Sert à calculer, trier, filtrer ou formater les données
 */
const getters = {
  plats: (state) => {
    return state.plats
  }
}

/*
Exporte les constantes, variables du fichier
On pourra ainsi les récupérer, les importer dans un autre fichier JS.

namespace: true, ajoute un namespace l'objet retourné.
 */
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
