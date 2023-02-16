export const Datas =[
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
    }
]
export const getbooks = (number) => {
    return Datas.find((data) => data.number === number)
}
