import React from "react";

const Presentation = () => {
  return (
    <div className="presentation">
      <div className="presentation__image">
        <img src="../../src/assets/IMG_20220325_104207.jpg" alt="moi" />
      </div>
      <div className="presentation__title">Mais qui suis-je ???</div>

      <div className="presentation__intro">
        Je suis Johnny, savonnier amateur à mes heures perdues.
        <br />
        <br />
        Faire ton propre savon t’intéresse ? Moi aussi ! Depuis plusieurs
        années, je fabrique des savons artisanaux dans ma cuisine, via la
        méthode de la saponification à froid (SAF) et bientôt via d’autres
        méthodes.
      </div>
      <div className="presentation__body">
        <div className="presentation__body__title">
          Pourquoi j’aime fabriquer des savons artisanaux ?
        </div>
        <div className="presentation__body__explication">
          C’est un peu par hasard que j’ai découvert la pratique de fabriquer
          chez soi des savons artisanaux (je raconte cela dans cet article).
          J’ai très rapidement été emballé par cette activité, et ce pour de
          multiples raisons :
        </div>
        <div className="presentation__body__explication__raison">
          C’est gratifiant : la pratique est simple et on arrive vite à produire
          des savons de haute qualité.
          <br />
          <br />
          C’est économique : dès qu’on fabrique quelque chose par soi même
          plutôt que de l’acheter, ça nous revient moins cher. Faire ses savons
          n’échappe pas à cette règle !<br />
          <br />
          C’est écologique : lorsque vous fabriquez votre savon, vous choisissez
          les ingrédients que vous utilisez : vous pouvez donc éviter les
          ingrédients des savons industriels qui ont un mauvais impact
          écologique (comme l’huile de palme), et favoriser les plus
          éco-friendly.
          <br />
          <br />
          C’est sain : encore une fois, vous choisissez vos ingrédients. Donc
          exit les ingrédients et additifs superflus des savons industriels qui
          peuvent être néfastes, ou pour le moins nuisibles (qui n’a jamais été
          irrité par un savon industriel ?).
          <br />
          <br />
          C’est créatif : il y a tant de recettes différentes, tant
          d’ingrédients aux propriétés différentes, vous permettant ainsi de
          réaliser des savons variés dans leurs compositions, leurs effets,
          leurs formes, leurs couleurs, leurs odeurs ! En plus de ça, vous
          pouvez faire plus qu’un « simple » savon : shampoing sec, savon à
          barbe (= mousse à raser), dentifrice solide (oui !), et des produits
          dérivés tels que votre propre lessive pour le linge.
        </div>
      </div>
    </div>
  );
};

export default Presentation;
