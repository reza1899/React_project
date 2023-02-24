
export let Datas =[
    {
        name : "nabarde man",
        price : '120,000',
        due : "1938",
        number :1
    },
    {
        name : "boostan",
        price : '60,000',
        due : "1265",
        number: 2
    },
    {
        name : "golestan",
        price : '65,000',
        due : "1285",
        number: 3
    },
    {
        name : "nabord",
        price : '65,000',
        due : "1285",
        number: 4
    },
    {
        name : "nazanin",
        price : '65,000',
        due : "1285",
        number: 5
    }
]
export const msr = (number) => {
    Datas = Datas.filter(data => {
        return data.number !== number
    })
}