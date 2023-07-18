def solution(arr, n):
    flag = True if len(arr)%2==0 else False    
    answer = []
    
    # 짝수인 경우
    if flag:
        for index,value in enumerate(arr):
            if index%2!=0:
                answer.append(value+n)
            else:
                answer.append(value)
        
    # 홀수인 경우
    else:
        for index,value in enumerate(arr):
            if index%2==0:
                answer.append(value+n)
            else:
                answer.append(value)

    return answer