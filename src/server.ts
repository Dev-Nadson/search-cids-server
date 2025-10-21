import { create_app } from "./app.js";

const PORT = 3333
const app = create_app()

app.listen({ "port": PORT }).then(() => {
    console.log(`Server is running on port: ${PORT}`)
    console.log(`Access on URL http://localhost:${PORT}`)
})