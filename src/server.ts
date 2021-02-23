import express from "express"

const app = express()

app.listen(3333, () => console.log("server is running!"))


app.get("/", (request, response) => {
    return response.json({"Mensagem": "Hello World - NLW04"})
})

app.post('/', (request, response) => {
    return response.json({"Mensagem": "Os dados foram salvos com sucesso!"})
})