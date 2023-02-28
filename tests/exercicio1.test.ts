import { exercicio1 } from "../src/exercicio1"

describe("exercicio1", () => {
    test("recebe um número em formato string e retorna o mesmo número, porém em formato number.", () => {
        const result =  exercicio1("50")

        expect(result).toBe(50)
    })
})