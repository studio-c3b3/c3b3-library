> Le projet est actuellement à l'arret, la dernière branche à jour est dev-faustin est le code est plutôt mauvais... Je compte revoir tout le code d'ici 2030 !
> *Faustin*

![Imgur](https://i.imgur.com/kLKrtLs.png)
# Jeu de pirate

Ceci est le git principal du projet. Il contient le fichier `index.html` qui est un exemple d'utilisation de la bibliothèque puis on créera un second dépôt avec le jeu

## Règle du code
- camelCase : Écrire les noms de variable en camelCase !
- Indentation : 2 espaces
- Commentaire :
	  - Si sur une ligne : `//`
	  -  Sinon les encapsuler de la sorte  
  ```js
  /************
  ligne de Commentaire
  ligne de Commentaire
  ************/
- Nom des fonctions : En français !
- Nom des constantes : En majuscule !

## Organisation
Je mets ici les instructions pour réaliser le jeu et structurer les fichiers.
Dans un premier temps :

- Nous allons utiliser index.html pour créer notre Jeu
- Nous aurons un `main.js` (principal) qui sera là où nous appellerons tous nos fichiers JS, ce qui signifie que le fichier canvas.js deviendra inutile
- On va créer une librairie de fonction générique. Toutes nos fonctions vont donc être en français.
- Tous nos fichiers JS seront pour l'instant en vrac dans le dossier JS
- Essayez de commenter au maximum
- Essayez de faire des commits avec un maximum d'information

Dans un second temps nous refactorisons le tout et mettrons tout dans d'autres structures : `joueur.js`, `boat.js`, `ennemy.js`, `map.js` etc...

## To Do
- [x] Avoir idéalement les quatre côté d'un bateau (normalement avoir les 4 diagonales aussi)
- [x] Faire bouge le bateau



> **En cas de problème avec le git contactez-moi**
*Faustin*
