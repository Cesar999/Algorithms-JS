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
        const temp = item.split(',');
        return {
            count: parseInt(temp[0]),
            string: temp[1]
        }
    });

    const map = {};
    for(let url of urls){
        const domains = url.string.split('.');
        let temp = '';

        for(let i=domains.length-1; i>=0; i--){
            temp = domains[i] + (i===domains.length-1?'':'.') + temp;

            if(!map[temp]){
                map[temp] = url.count;
            } else {
                map[temp] += url.count;
            }

        }
        
    }

    console.log(map);

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
