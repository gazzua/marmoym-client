import RootContainer from '@universal/containers/app/RootContainer/RootContainer.mobile';

const routes: Routes = {
  '/': {
    component: RootContainer,
  },
};

export default routes;

interface Routes {
  [path: string]: {
    component: Function & { prefetch },
  },
}
