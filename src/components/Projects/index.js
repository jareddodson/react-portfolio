import React from 'react';
import ProjectList from '../ProjectList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <ProjectList category={currentCategory.name} />
      <ul>
        <p>1.</p>
        <a href='https://byteme-ecommerce.herokuapp.com/'>E-Commerce Website</a>
        <p>2.</p>
        <a href='https://github.com/jareddodson/readme-generator'>Readme Generator</a>
        <p>3.</p>
        <a href='https://evalecillos.github.io/T-B-D/'>Music Website</a>
        <p>4.</p>
        <a href='https://vividstroke.herokuapp.com/'>Graphic Art Website</a>
      </ul>
    </section>
  );
}
export default Gallery;