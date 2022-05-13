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

    for(let item of arr){
        if(mapIndex.hasOwnProperty(item.skill)){
            result[mapIndex[item.skill]].count++;
            result[mapIndex[item.skill]].user.push(item.user);
        } else {
            mapIndex[item.skill] = result.length;
            result.push({skill: item.skill, count: 1, user: [item.user]});
        }
    }

    console.log(result);
    return result;
}

transformObjects(endorsements);
// [
//     { skill: 'css', count: 2, users: [ 'Bill', 'Sue' ] },
//     { skill: 'javascript', count: 3, users: [ 'Chad', 'Bill', 'Sue' ] },
//     { skill: 'html', count: 1, users: [ 'Sue' ] }
// ]