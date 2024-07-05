const url = 'https://flight-fare-search.p.rapidapi.com/v2/flights/?from=LHR&to=DXB&adult=1&type=economy&currency=USD';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'Sign Up for Key',
		'x-rapidapi-host': 'flight-fare-search.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}