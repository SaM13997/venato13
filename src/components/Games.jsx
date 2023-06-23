import { useQuery } from 'react-query'
import axios from 'axios'

const fetchGames = async () => {
	const client_id = 'zm1q09qmyhsfoi25k3h3tfoi2g1t3o'
	const auth_token = 'Bearer 97ix6j43i70u071ejxf7pqrlwxriqd'
	const url = 'https://api.igdb.com/v4/games'

	const headers = {
		'Client-ID': client_id,
		Authorization: auth_token,
	}

	const data = 'fields name,summary; limit 10;'

	const response = await axios.post(url, data, { headers })
	return response.data
}

const GameList = () => {
	const { data, error, isLoading } = useQuery('games', fetchGames)

	if (isLoading) {
		return <p>Loading...</p>
	}

	if (error) {
		return <p>Error: {error.message}</p>
	}

	return (
		<div>
			<h1>Game List</h1>
			{data.map((game) => (
				<div key={game.id}>
					<h3>{game.name}</h3>
					<p>{game.summary}</p>
				</div>
			))}
		</div>
	)
}

export default GameList
