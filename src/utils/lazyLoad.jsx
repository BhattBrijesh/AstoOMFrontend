import React from "react";
// test
export const LazyLoad = (path) =>
  React.lazy(() => import(`../components/${path}`));
