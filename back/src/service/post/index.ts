import { NewPost, Post, insertPostSchema } from '../../db/schema/post/index';
import { db } from "../../db"
import { posts } from "../../db/schema/post"
import { eq, like } from "drizzle-orm"
import { postValidators } from '../../validator/post';

export const getPostsService = async (search: string): Promise<Post[]> => {
    // const allPosts = await db.query.posts.findMany({ where: like(posts.title, search) });
    const allPosts = await db.select().from(posts).where(search ? like(posts.title, `%${search}%`) : undefined)
    return allPosts;
}


export const getPostService = async (id: string): Promise<Post | undefined> => {
    const post = await db.query.posts.findFirst({
        where: eq(posts.id, id)
    });

    return post;
}

export const addPostService = async (body: NewPost): Promise<NewPost | undefined> => {
    // add zod validator from drizzle-zod
    const newPost = postValidators.upsert<Pick<Post, ("title" | "content")>>(body)

    const post: NewPost[] = await db.insert(posts).values(newPost).returning();

    if (post) return post[0]
}


export const editPostService = async (id: string, body: NewPost): Promise<Post | undefined> => {

    // add zod validator from drizzle-zod
    const editedPost = postValidators.upsert<Pick<Post, ("title" | "content")>>(body)

    const post: Post[] = await db.update(posts).set(editedPost).where(eq(posts.id, id)).returning()

    if (post) return post[0]
}

export const deletePostService = async (id: string): Promise<string | undefined> => {
    const post = await db.delete(posts).where(eq(posts.id, id)).returning({ id: posts.id })

    if (post) return post[0].id
}