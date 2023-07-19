def solution(hp):
    answer = 0    
    first, second, third = 0, 0, 0
    
    first = int(hp/5)
    hp = hp - first*5
    
    second = int(hp/3)
    hp = hp - second*3
    
    third = hp
    
    answer = first + second + third
    
    return answer