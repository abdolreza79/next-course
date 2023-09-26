import {z} from "zod"

const schema = z.object({
    name:z.string(),
    price:z.number().min(5,"قیمت باید بیشتر از 5 واحد باشد")
})
export default schema