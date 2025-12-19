import React from "react";

export const LazyLoad = (path) =>
  React.lazy(() => import(`../components/${path}`));
