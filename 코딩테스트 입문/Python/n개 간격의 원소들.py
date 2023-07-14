def solution(num_list, n):
    answer = []
    
    for index,value in enumerate(num_list):
        if index%n==0:
            answer.append(value)
    
    return answer