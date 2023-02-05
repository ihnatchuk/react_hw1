import React, {useContext, useEffect, useState} from 'react';

import {albumsService} from "../../api";
import {Album} from "../Album/Album";
import css from './Albums.module.css'
import {MyContext} from "../../index";

export const Albums = () => {
    const [albums,setAlbums]=useState([])

    const context=useContext(MyContext);

    useEffect(()=>{
        albumsService.getAll().then(({data})=>setAlbums([...data]))
        context.pages.push({name:'Albums', status:true});
    },[])


    return (
        <div className={css.Albums}>
            {
                albums.map(album => <Album key={album.id} album={album}/>)
            }
        </div>
    );
};
