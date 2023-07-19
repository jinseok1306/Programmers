import re

def solution(myString):
    answer = re.sub('[abcdefghijk]','l',myString)
    return answer