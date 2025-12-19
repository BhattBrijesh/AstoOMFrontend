import React from "react";

export const lazyLoad = (path) =>
  React.lazy(() => import(`../components/${path}`));
