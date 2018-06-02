// Transform mixin.
export function transform(transformation) {
  return `
  -webkit-transform: ${transformation};
      -ms-transform: ${transformation};
          transform: ${transformation};
  `;
}

// Neon text effect including hover status.
export function textShadow(color, isHovered = false) {
  const textShadow = `
    0 0 5px #fff,
    0 0 20px ${color},
    0 0 30px ${color},
    0 0 40px ${color}
  `;

  if (isHovered) {
    return `
      ${textShadow + `,0 0 20px #fff,0 0 55px ${color},0 0 75px ${color}`};
    `;
  }
  else {
    return `
      ${textShadow};
    `;
  }
}
