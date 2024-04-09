import { Router } from "express";

import {
    getPost,
    getPosts,
    addPost,
    editPost,
    deletePost
}
    from "../../controller/post";


const postRouter = Router();

postRouter.get('/', getPosts);
postRouter.get('/:id', getPost);
postRouter.post('/', addPost,);
postRouter.get('/:id', editPost);
postRouter.get('/:id', deletePost);

export default postRouter;

