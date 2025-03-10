import { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Preloader from '../components/UIElements/Preloader/Preloader';
import ModalProjectCard from '../scenes/Projects/ModalProjectCard/ModalProjectCard';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

export const routes = {
  Home: '/',
  About: '/about',
  Projects: '/projects',
  Services: '/services',
  Project: '/project/:id',
  Resume: '/resume',
};

const scenes = {
  Home: lazy(() => import('../scenes/Home/Home')),
  About: lazy(() => import('../scenes/About/About')),
  Projects: lazy(() => import('../scenes/Projects/Projects')),
  Services: lazy(() => import('../scenes/Services/Services')),
  Resume: lazy(() => import('../scenes/Resume/Resume')),
};

function LazyScene({ name }) {
  const Scene = scenes[name];
  return (
    <Suspense fallback={<Preloader />}>
      <Scene />
    </Suspense>
  );
}

function RootRoutes() {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <>
      <ErrorBoundary>
        <Routes location={background || location}>
          <Route
            path={routes.Home}
            element={<LazyScene name="Home" />}
          />
          <Route
            path={routes.About}
            element={<LazyScene name="About" />}
          />
          <Route
            path={routes.Projects}
            element={<LazyScene name="Projects" />}
          />
          <Route
            path={routes.Services}
            element={<LazyScene name="Services" />}
          />
          <Route
            path={routes.Resume}
            element={<LazyScene name="Resume" />}
          />
          <Route
            /*Modal*/ path={routes.Project}
            element={<ModalProjectCard />}
          />
        </Routes>
      </ErrorBoundary>
      {background && (
        <Routes>
          <Route
            path={routes.Project}
            element={<ModalProjectCard />}
          />
        </Routes>
      )}
    </>
  );
}

export default RootRoutes;
