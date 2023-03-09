import { LinearProgress, styled } from "@mui/material";
import {
  ComponentType,
  LazyExoticComponent,
  PropsWithoutRef,
  Suspense,
} from "react";

const LoaderWrapper = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1301,
  width: "100%",
});

const Loader = () => (
  <LoaderWrapper>
    <LinearProgress color="primary" />
  </LoaderWrapper>
);

const Loadable =
  <P extends object>(Component: LazyExoticComponent<ComponentType<P>>) =>
  (props: PropsWithoutRef<P>) => {
    return (
      <Suspense fallback={<Loader />}>
        <Component {...props}></Component>
      </Suspense>
    );
  };

export default Loadable;
