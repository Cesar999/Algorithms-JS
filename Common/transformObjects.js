const endorsements = [
    {skill: 'css', user: 'Bill'},
    {skill: 'javascript', user: 'Chad'},
    {skill: 'javascript', user: 'Bill'},
    {skill: 'css', user: 'Sue'},
    {skill: 'javascript', user: 'Sue'},
    {skill: 'html', user: 'Sue'}
];

function transformObjects(arr){
    const result = [];
    const mapIndex = {};

    arr.forEach(item => {
        if(mapIndex.hasOwnProperty(item.skill)){
            result[mapIndex[item.skill]].count++;
            result[mapIndex[item.skill]].users.push(item.user);
        } else {
            mapIndex[item.skill] = result.length;
            result.push({skill: item.skill, count: 1, users: [item.user]});
        }
    });

    console.log(result);
    return result;
}

transformObjects(endorsements);
