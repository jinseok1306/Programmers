def solution(cipher, code):
    answer = ''
    
    for index,value in enumerate(cipher):
        if (index+1)%code == 0:
            answer += value
    
    return answer