import * as dotenv from 'dotenv'
import { createServer } from './express.server'
import swaggerUi from "swagger-ui-express"
import swaggerDoc from "./docs/swagger.json"

dotenv.config()
const port = process.env.PORT || 3333
const app = createServer()

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc))
app.listen(port, () => {
    console.log(`Api rodando na porta ${port}`)
})
