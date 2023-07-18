def solution(str_list, ex):
    answer = ''
    
    for v in str_list:
        answer += "" if ex in v else v
    
    return answer