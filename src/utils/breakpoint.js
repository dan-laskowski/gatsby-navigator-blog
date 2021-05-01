const size = {
  mobile: `375px`,
  tablet: `714px`,
  desktop: `1234px`,
};

const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
  timeline: `(max-width: ${size.tablet})`,
};

export default { size, device };
