import {Route, Routes} from "react-router-dom";
import React from "react";

import './App.css';
import {NotFoundPage, PostPage, AlbumsPage, TodosPage, CommentsPage} from "./pages";
import {MainLayout} from "./layouts";

const App=()=> {
  return (
      <>
          <Routes>

              <Route path={'/'} element={<MainLayout/>}>
                  <Route path={'todos'} element={ <TodosPage/> } />
                  <Route path={'albums'} element={ <AlbumsPage/> } />
                  <Route path={'comments'} element={<CommentsPage/>}>
                      <Route path={':postId'} element={ <PostPage/> } />
                  </Route>
              </Route>

                  <Route path={'*'} element={ <NotFoundPage/> } />

          </Routes>
      </>

  );
}

export {App};
