def solution(str1, str2):
    answer = ''
    
    for index,value in enumerate(str1):
        answer += value + str2[index]
    
    return answer