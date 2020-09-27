import React from 'react';
import TagLabel from '../../components/TagLabel/TagLabel';

import './Article.css';

function Article() {
  return (
    <div className="Article">
      <h1 className="Article__header">Challenge Open Data</h1>
      <div className="Article__tag-group">
        <TagLabel text="visualization" color="orange" />
        <TagLabel text="webDev" color="red" />
        <TagLabel text="react" color="blue" />
        <TagLabel text="data" color="black" />
      </div>
      <p className="Article__time">
        Redigé le 26 Septembre 2020・3 min lecture
      </p>

      <div className="Article__section">
        <h2 className="section__title">
          Introduction
        </h2>

        <p className="section__text">
          Sit et ea ad pariatur fugiat dolor do amet anim. Lorem
          incididunt tempor magna duis eiusmod qui pariatur cupidatat sint
          ex veniam nostrud. Elit cupidatat exercitation Lorem minim laborum
          dolor ea duis excepteur laborum. Do eiusmod esse ipsum non eiusmod
          excepteur duis exercitation. Ipsum nulla id id pariatur do anim id.
          Sunt tempor magna dolore eu nulla mollit anim.
        </p>
      </div>

      <div className="Article__section">
        <h2 className="section__title">
          Jeux de données
        </h2>

        <p className="section__text">
          Sit et ea ad pariatur fugiat dolor do amet anim. Lorem
          incididunt tempor magna duis eiusmod qui pariatur cupidatat sint
          ex veniam nostrud. Elit cupidatat exercitation Lorem minim laborum
          dolor ea duis excepteur laborum. Do eiusmod esse ipsum non eiusmod
          excepteur duis exercitation. Ipsum nulla id id pariatur do anim id.
          Sunt tempor magna dolore eu nulla mollit anim.
        </p>
        <p className="section__text">
          Sit et ea ad pariatur fugiat dolor do amet anim. Lorem
          incididunt tempor magna duis eiusmod qui pariatur cupidatat sint
          ex veniam nostrud. Elit cupidatat exercitation Lorem minim laborum
          dolor ea duis excepteur laborum. Do eiusmod esse ipsum non eiusmod
          excepteur duis exercitation. Ipsum nulla id id pariatur do anim id.
          Sunt tempor magna dolore eu nulla mollit anim.
        </p>
      </div>

      <div className="Article__section">
        <h2 className="section__title">
          Traitement de données
        </h2>

        <p className="section__text">
          Sit et ea ad pariatur fugiat dolor do amet anim. Lorem
          incididunt tempor magna duis eiusmod qui pariatur cupidatat sint
          ex veniam nostrud. Elit cupidatat exercitation Lorem minim laborum
          dolor ea duis excepteur laborum. Do eiusmod esse ipsum non eiusmod
          excepteur duis exercitation. Ipsum nulla id id pariatur do anim id.
          Sunt tempor magna dolore eu nulla mollit anim.
        </p>
      </div>

      <div className="Article__section">
        <h2 className="section__title">
          Architecture
        </h2>

        <p className="section__text">
          Sit et ea ad pariatur fugiat dolor do amet anim. Lorem
          incididunt tempor magna duis eiusmod qui pariatur cupidatat sint
          ex veniam nostrud. Elit cupidatat exercitation Lorem minim laborum
          dolor ea duis excepteur laborum. Do eiusmod esse ipsum non eiusmod
          excepteur duis exercitation. Ipsum nulla id id pariatur do anim id.
          Sunt tempor magna dolore eu nulla mollit anim.
          dolor ea duis excepteur laborum. Do eiusmod esse ipsum non eiusmod
          excepteur duis exercitation. Ipsum nulla id id pariatur do anim id.
          Sunt tempor magna dolore eu nulla mollit anim.
          dolor ea duis excepteur laborum. Do eiusmod esse ipsum non eiusmod
          excepteur duis exercitation. Ipsum nulla id id pariatur do anim id.
          Sunt tempor magna dolore eu nulla mollit anim.
          dolor ea duis excepteur laborum. Do eiusmod esse ipsum non eiusmod
          excepteur duis exercitation. Ipsum nulla id id pariatur do anim id.
          Sunt tempor magna dolore eu nulla mollit anim.
        </p>
      </div>

      <div className="Article__section">
        <h2 className="section__title">
          Librairie
        </h2>

        <p className="section__text">
          Sit et ea ad pariatur fugiat dolor do amet anim. Lorem
          incididunt tempor magna duis eiusmod qui pariatur cupidatat sint
          ex veniam nostrud. Elit cupidatat exercitation Lorem minim laborum
          dolor ea duis excepteur laborum. Do eiusmod esse ipsum non eiusmod
          excepteur duis exercitation. Ipsum nulla id id pariatur do anim id.
          Sunt tempor magna dolore eu nulla mollit anim.
          Do eiusmod esse ipsum non eiusmod
          excepteur duis exercitation. Ipsum nulla id id pariatur do anim id.
          Sunt tempor magna dolore eu nulla mollit anim.
        </p>
      </div>

      <div className="Article__section">
        <h2 className="section__title">
          Conclusion
        </h2>

        <p className="section__text">
          Sit et ea ad pariatur fugiat dolor do amet anim. Lorem
          incididunt tempor magna duis eiusmod qui pariatur cupidatat sint
          ex veniam nostrud. Elit cupidatat exercitation Lorem minim laborum

        </p>
      </div>
    </div>
  );
}

export default Article;
