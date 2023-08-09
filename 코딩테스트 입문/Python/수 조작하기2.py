def solution(numLog):
    answer = ''
    data = 0  
    
    for index,value in enumerate(numLog):
        if index>=1:
            if value-data == 1:
                answer += "w"
            elif value-data == -1:
                answer += "s"
            elif value-data == 10:
                answer += "d"
            elif value-data == -10:
                answer += "a"
        data = value
    
    return answer