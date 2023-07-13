def solution(num_list):
    answer = -1
    
    for index, value in enumerate(num_list):
        if value<0 :
            return index
    
    return answer