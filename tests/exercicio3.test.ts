import { exercicio3 } from "../src/exercicio3"

describe("exercicio3", () => {
    test("retorna true se o Astrodev estiver presente na lista", () => {
        const result =  exercicio3(["Luana", "Astrodev", "Joana"])


        expect(result).toContain("Astrodev")
    })
})