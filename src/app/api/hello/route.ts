import axios from 'axios'
export async function GET(request: Request) {
	const data = await axios({
		method: 'get',
		url: `https://api.rawg.io/api/games?key=27fdc1adf5384b60b1b4c1f20e69ecec`,
		params: {
			key: '27fdc1adf5384b60b1b4c1f20e69ecec',
		},
	})
	console.log({ data })
	return data
}
