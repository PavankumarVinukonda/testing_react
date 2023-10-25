import { sum } from "../components/sum";


test("sum",() => {
   const result =  sum(2,3)

    // assertion
    expect(result).toBe(5)
})