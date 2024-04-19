import { insertPostSchema } from "../../db/schema/post";

export const postValidators = {
    upsert: <T>(body: T) => insertPostSchema.parse(body)

}