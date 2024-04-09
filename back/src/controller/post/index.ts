import { Router, Request, Response } from "express";

import {
    getPostService,
    getPostsService,
    addPostService,
    editPostService,
    deletePostService
}
    from "../../service/post";

export const getPosts = async (req: Request, res: Response): Promise<Response> => {
    try {
        const posts = await getPostsService();
        return res.status(200).json(posts)
    }
    catch (e) {
        return res.status(400).send(e)
    }
}

export const getPost = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;

        const post = await getPostService(id);
        if (!post) return res.status(404).send({ message: "Post Could not be found" })

        return res.send(post)
    }
    catch (e) {
        return res.status(400).send(e)
    }
}

export const addPost = async (req: Request, res: Response) => {

    try {
        const { title, content } = req.body;
        // TODO: check params require with Zod
        const newPost = await addPostService({ title, content });
        if (newPost) return res.send(newPost)

    }
    catch (e) {
        return res.status(400).send(e)
    }
}

export const editPost = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const { title, content } = req.body;
        // TODO: check params require with Zod
        const editedPost = await editPostService(id, { title, content });
        if (!editedPost) return res.status(404).send({ message: "Post Could not be found" })
        return res.send(editPost)

    }
    catch (e) {
        return res.status(400).send(e)
    }
}




export const deletePost = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        // TODO: check params require with Zod
        const deletedPostId = await deletePostService(id);
        if (!deletedPostId) return res.status(404).send({ message: "Post Could not be found" })

        return res.send({ id: deletedPostId })

    }
    catch (e) {
        return res.status(400).send(e)
    }
}

