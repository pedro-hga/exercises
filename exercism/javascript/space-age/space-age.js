export const age = (p, s) => {
  const planets = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1.0,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  };

  if (!(p in planets)) {
    throw new Error("not a planet");
  }

  return Number((s / 31557600 / planets[p.toLowerCase()]).toFixed(2));
};
