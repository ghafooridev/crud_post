import { NewPost, Post } from './../../db/schema/index';
import { db } from "../../db"
import { posts } from "../../db/schema"
import { eq } from "drizzle-orm"

export const getPostsService = async (): Promise<Post[]> => {
    const posts = await db.query.posts.findMany();

    return posts;
}


export const getPostService = async (id: string): Promise<Post | undefined> => {
    const post = await db.query.posts.findFirst({
        where: eq(posts.id, id)
    });

    return post;
}

export const addPostService = async (body: NewPost): Promise<NewPost | undefined> => {
    const post: NewPost[] = await db.insert(posts).values({
        title: body.title,
        content: body.content
    }).returning();

    if (post) return post[0]
}


export const editPostService = async (id: string, body: NewPost): Promise<Post | undefined> => {
    const post: Post[] = await db.update(posts).set({
        title: body.title,
        content: body.content
    }).where(eq(posts.id, id)).returning()

    if (post) return post[0]
}

export const deletePostService = async (id: string): Promise<string | undefined> => {
    const post = await db.delete(posts).where(eq(posts.id, id)).returning({ id: posts.id })

    if (post) return post[0].id
}