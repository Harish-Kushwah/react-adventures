function Random(){

    var number = Math.random()*100;
    return <h1 style={{'backgroundColor':'#10ffff'}}>
        Random number is :{Math.round(number)}
    </h1>
}
export default Random;