export const getViewPortState = config => {
  const width = window.innerWidth;
  const { mobile, tablet, desktop } = (() =>
    Object.assign({}, BREAKPOINTS, config))();
  if (width >= mobile && width < tablet) {
    return 'mobile';
  }
  if (width >= tablet && width < desktop) {
    return 'tablet';
  }
  return 'desktop';
};

export const BREAKPOINTS = {
  // BREAKPOINT FOR STYLED COMPONENTS
  mobile: 0,
  tablet: 767,
  desktop: 1024,
};

export default {
  getViewPortState,
  BREAKPOINTS,
};
