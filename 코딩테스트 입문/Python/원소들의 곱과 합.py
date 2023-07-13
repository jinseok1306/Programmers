from functools import reduce
import math

def Mul(x,y):
    return x*y

def solution(num_list):
    answer = 1 if math.pow(sum(num_list),2) > reduce(Mul,num_list) else 0
    return answer