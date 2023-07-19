def solution(num_list):    
    answer = 0
    oddSum = 0
    evenSum = 0
    
    for index, value in enumerate(num_list):
        if index%2==0:
            evenSum += value
        else:
            oddSum += value
    
    answer = max(evenSum, oddSum)
    
    return answer