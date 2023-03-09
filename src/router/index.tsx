// import { lazy } from "react";
import { createHashRouter } from "react-router-dom";
// import Loadable from "./Loadable";
import Demo from "../entry/Demo";
import App from "../App";
// /** 根据目录进行构建路由 */
// const threeJsxModules = import.meta.glob(["../entry/three/**/index.tsx"]);
// export const routes = Object.entries(threeJsxModules).map((module) => {
//   return {
//     path: module[0].replace("../entry", "").replace("/index.tsx", ""),
//     name: module[0].split("/")[3],
//     component: Loadable(lazy(module[1] as () => Promise<{ default: any }>)),
//   };
// });

const router = createHashRouter([
  { path: "/demo", element: <Demo /> },
  { path: "/", element: <App></App> },
]);
export default router;
