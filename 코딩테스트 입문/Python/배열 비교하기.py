def solution(arr1, arr2):
    answer = 0
    arr1Sum = sum(arr1)
    arr2Sum = sum(arr2)
    
    if len(arr1) == len(arr2):
        if arr1Sum == arr2Sum:
            answer = 0
        elif arr1Sum > arr2Sum:
            answer = 1
        else:
            answer = -1
    else:
        if len(arr1) > len(arr2):
            answer = 1
        else:
            answer = -1
                
    return answer