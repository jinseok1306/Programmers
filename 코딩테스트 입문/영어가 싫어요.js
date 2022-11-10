function solution(numbers) {
    let answer = 0;
    
    let arr_num = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    arr_num.forEach((e,i)=>{
        console.log(`e:${e} i:${i}`);
        let letter = new RegExp(e,"g");
        numbers = numbers.replace(letter,i);
    });
    
    answer = Number(numbers);
    
    return answer;
}