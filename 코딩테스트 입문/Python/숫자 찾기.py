def solution(num, k):
    for index,value in enumerate(str(num)):
        if value == str(k):
            return index+1
        
    return -1