function getData(){
    const city = document.getElementById('search').value;
    const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;
    const options = {
	    method: 'GET',
	    headers: {
		    'x-rapidapi-key': '2e5536de32msh691d145a65680e0p1ad03djsnfad0cc77d101',
		    'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	    }
    };

    async function fetching(){
        const response = await fetch(url, options);
        const result = await response.json();
        document.getElementById("t").innerHTML = parseFloat(((result.main.temp-32)*5/9).toPrecision(1));
        document.getElementById("wind").innerHTML = result.wind.speed;
        document.getElementById("humid").innerHTML = result.main.humidity;
        console.log(result);
    }
    
    try {
	    fetching()
    } catch (error) {
	    console.error(error);
    }
}

const enterKey = document.getElementById("search");
enterKey.addEventListener('keypress',(event)=>{
    if(event.key==="Enter"){
        getData();
    }
});