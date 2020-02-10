export default class HttpClient {
	constructor(url, app_id, app_key) {
		this.url = url;
		this.app_id = app_id;
		this.app_key = app_key;
	}
	getData = async () => {
		const response = await fetch(`${this.url}?q=pulse&to=100&app_id=${this.app_id}&app_key=${this.app_key}`)
			.then(response => {
				try {
					if (response.status === 200) {
						return response.json();
				    } else {
				    	throw new Error('Something went wrong on api server!');
				    }
				} catch(error) {
					console.log('[ERROR: ]', error)
					return error;
				}
			})
			.catch(error => {
				console.log('[ERROR: ]', error)
				return error;
			})
		return response;
	}
}