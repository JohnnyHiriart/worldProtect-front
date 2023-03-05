import React from "react";

const Recette = () => {
  return (
    <div className="recette">
      <div className="recette__title">
        Voici une de mes recettes principales !!{" "}
      </div>
      <div className="recette__intro">
        Pour commencer j&apos;utilise une méthode de saponification à froid, car
        ce procédé permet aux savons de garder totalement les propriétés des
        ingrédients, même si cette méthode est plus longue.
      </div>
      <div className="recette__body">
        <div className="recette__body__image">
          <img src="../../src/assets/savon_recette.jpg" alt="" />
        </div>
        <div className="recette__body__ingredients">
          Pour réaliser cette recette, il vous faudra :<br />
          <br />° des gants et lunettes de protection <br /> ° de la lessive de
          soude vendu dans tous les commerces,
          <br />° de l&apos;huile d&apos;olive de bonne qualité !
        </div>
        <div className="recette__body__method">
          Dans un grand récipient en métal ou en verre, versez 161 grammes de
          lessive de soude précisément puis rajoutez 400 grammes d&apos;huile
          d&apos;olive.
          <br /> <br />
          Mélangez avec un fouet (électrique de préférence) jusqu&apos;à
          obtention d&apos;une pate bien homogène légèrement épaisse.
        </div>
        <div className="recette__body__method__final">
          Avec une louche en métal, remplissez des moules en silicone de votre
          choix pour donner la futur forme de vos savons.
          <br />
          Après 48h, vous pouvez démouler vos savons et les laisser reposer !{" "}
          <br /> Il faudra attendre 5 à 6 semaines avant de pouvoir s&apos;en
          servir !!! c&apos;est très important ! cette méthode de saponification
          à froid est longue car nous laissons naturellement la fusion avec la
          lessive de soude opérer. Sans ce temps de repos, il serait dangereux
          pour le corps car trop acide !!
        </div>
      </div>
    </div>
  );
};

export default Recette;
