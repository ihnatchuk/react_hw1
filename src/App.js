import {Navigate, Route, Routes} from "react-router-dom";
import React from "react";

import './App.css';
import {NotFoundPage, PostPage, AlbumsPage, TodosPage, CommentsPage, LoginPage} from "./pages";
import {MainLayout} from "./layouts";
import {RequireAuth} from "./components/hoc/RequireAuth";

const App=()=> {
  return (
      <>
          <Routes>

              <Route path={'/'} element={<MainLayout/>}>
                  <Route index element={ <Navigate to={'todos'} /> } />
                  <Route path={'todos'} element={ <TodosPage/> } />
                  <Route path={'albums'} element={
                      <RequireAuth>
                          <AlbumsPage/>
                      </RequireAuth> } />
                  <Route path={'comments'} element={<CommentsPage/>}>
                      <Route path={':postId'} element={ <PostPage/> } />
                  </Route>
                  <Route path={'login'} element={ <LoginPage/> } />

              </Route>

                  <Route path={'*'} element={ <NotFoundPage/> } />

          </Routes>
      </>

  );
}

export {App};
