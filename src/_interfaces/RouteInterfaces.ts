export interface RouteObject {
  path: string;
  element: JSX.Element;
}

export interface RouteStructure {
  fallbackPath: string;
  path?: string;
  routes: RouteObject[];
}
