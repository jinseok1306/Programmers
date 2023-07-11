import re 

def solution(my_string):
    answer = re.sub('[aeiou]','',my_string)
    return answer