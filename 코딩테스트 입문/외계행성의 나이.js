function solution(age) {
    let answer = '';
    
    let arr = { 0:'a', 1:'b', 2:'c', 3:'d', 4:'e', 5:'f', 6:'g', 7:'h', 8:'i', 9:'j' }
    
    answer = age.toString().split('').map(v=>arr[v]).join('');
    
    return answer;
}