import { create_app } from "./app.js";
import { env } from "./libs/environments.js";

const PORT = env.PORT
const HOST = env.HOST
const app = create_app()

app.listen({ "port": PORT, "host": HOST }).then(() => {
    console.log(`Server is running on port: ${PORT}`)
    console.log(`Access on URL http://localhost:${PORT}`)
})