const counts = [
    "900,google.com",
    "60,mail.yahoo.com",
    "10,mobile.sports.yahoo.com",
    "40,sports.yahoo.com",
    "300,yahoo.com",
    "10,stackoverflow.com",
    "2,en.wikipedia.org",
    "1,es.wikipedia.org",
    "1,mobile.sports"
];

function format(data){

    const urls = data.map(item => {
        const [value, domain] = item.split(',');
        return {
            value: parseInt(value),
            domain
        }
    });

    const result = {};
    
    for(let url of urls){
        const domain = url.domain.split('.');
        const value = url.value;
        let temp = '';
        for(let i=domain.length-1; i>=0; i--){

            temp = i === domain.length-1 ? domain[i] : domain[i] + '.' + temp;

            if(result.hasOwnProperty(temp)){
                result[temp] += value;
            } else {
                result[temp] = value;
            }
        }
    }

    console.log(result)
}

format(counts);


// 1320 - com
// 900 - google.com
// 410 - yahoo.com
// 60 - mail.yahoo.com
// 50 - sports.yahoo.com
// 10 - mobile.sports.yahoo.com
// 10 - stackoverflow
// 3 - org
// 3 - wikipedia.org
// 2 - en.wikipedia
// 1 - es.wikipedia.org
// 1 - mobile.sports
// 1 - sports
