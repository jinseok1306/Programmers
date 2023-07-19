def solution(my_strings, parts):
    answer = ''
    
    for index, value in enumerate(my_strings):
        answer += value[parts[index][0]:parts[index][1]+1]
    
    return answer