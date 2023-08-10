def solution(a, d, included):
    answer = 0
    
    for index,value in enumerate(included):
        if value:
            print(index)
            answer += a+ (index) * d
    
    return answer