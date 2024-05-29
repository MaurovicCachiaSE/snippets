import express from "express"

const main = () => {
	const app = express()
	app.use(express.json())

    app.get("/", (req) => {

        const data = req.query

        console.log(data.array)

    })

    app.listen(3004)
	console.info(`Server is running at http://localhost:3004`)

}

main()

// Instructions:
// 1. Run the server
// 2. Open the browser and go to http://localhost:3004/?array[0]=0&array[1]=1&array[2]=2&array[3]=3&array[4]=4&array[5]=5 - This will work, giving you the array [0, 1, 2, 3, 4, 5]
// 3. Open the browser and go to http://localhost:3004/?array[0]=0&array[1]=1&array[2]=2&array[3]=3&array[4]=4&array[5]=5&array[6]=6&array[7]=7&array[8]=8&array[9]=9&array[10]=10&array[11]=11&array[12]=12&array[13]=13&array[14]=14&array[15]=15&array[16]=16&array[17]=17&array[18]=18&array[19]=19&array[20]=20  - This will work, but will give you an array
// 4. Open the browser and go to http://localhost:3004/?array[0]=0&array[1]=1&array[2]=2&array[3]=3&array[4]=4&array[5]=5&array[6]=6&array[7]=7&array[8]=8&array[9]=9&array[10]=10&array[11]=11&array[12]=12&array[13]=13&array[14]=14&array[15]=15&array[16]=16&array[17]=17&array[18]=18&array[19]=19&array[20]=20&array[21]=21  - This will work, but will give you an object, and this is were the bug is
