export enum AppRoutes {
  Main = 'Main',
  Map = 'Map',
}

export type AppStackParams = {
  [AppRoutes.Main]: undefined;
  [AppRoutes.Map]: undefined;
};
