function solution(num_list) {
    let leng_val = num_list.length;
    let last = num_list[leng_val-1] > num_list[leng_val-2] ? num_list[leng_val-1]-num_list[leng_val-2] : num_list[leng_val-1] * 2;   
    num_list.push(last);

    return num_list;
}