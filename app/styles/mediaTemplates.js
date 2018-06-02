import {css} from 'styled-components';

const sizes = {
  small: 615
}

const reducer = (widthString) => {
  return (acc, label) => {
    acc[label] = (...args) => css`
      @media (${widthString}: ${sizes[label] / 16}em) {
        ${css(...args)}
      }
    `;
    return acc;
  };
};

// Iterate through sizes and create min and max width media templates for each.
let media = {};
media.maxWidth = Object.keys(sizes).reduce(reducer('max-width'), {});
media.minWidth = Object.keys(sizes).reduce(reducer('min-width'), {});

export default media;



// media.maxWidth = Object.keys(sizes).reduce((acc, label) => {
//   acc[label] = (...args) => css`
//     @media (max-width: ${sizes[label] / 16}em) {
//       ${css(...args)}
//     }
//   `;
//   return acc;
// }, {});
