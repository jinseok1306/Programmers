def solution(n):
    answer = 0
    
    # 홀수인 경우
    if n%2!=0:
        for i in range(1,n+1,2):
            answer += i
    else:
        for i in range(2,n+1,2):
            answer += pow(i,2)
            
    return answer