def solution(n):
    answer = 1 if 6%n == 0 else lcm(6,n)//6
    return answer

def gcd(x,y):
    while(y):
        x,y=y,x%y
    return x

def lcm(x,y):
    result = (x*y)//gcd(x,y)
    return result