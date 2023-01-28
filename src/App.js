import {Route, Routes} from "react-router-dom";
import React from "react";

import './App.css';
import {AboutPage, HomePage, NotFoundPage, PostDetailsPage, PostsPage, UsersPage} from "./pages";
import {MainLayout} from "./layouts";

const App=()=> {
  return (
      <>
          <Routes>

              <Route path={'/'} element={<MainLayout/>}>
                  <Route index element={ <HomePage/> } />
                  <Route path={'users'} element={ <UsersPage/> } />
                  <Route path={'posts'} element={<PostsPage/>}>
                      <Route path={':postId'} element={ <PostDetailsPage/> } />
                  </Route>
                  <Route path={'about'} element={ <AboutPage/> } />
              </Route>

                  <Route path={'*'} element={ <NotFoundPage/> } />

          </Routes>
      </>

  );
}

export {App};
