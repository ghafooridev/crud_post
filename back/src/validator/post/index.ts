import { insertPostSchema } from "../../db/schema";

export const postValidators = {
    upsert: <T>(body: T) => insertPostSchema.parse(body)

}