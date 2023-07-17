def solution(myString, pat):
    answer = 0
    str = ""
    
    for v in myString:
        str += "A" if v == "B" else "B"
    
    answer = 1 if pat in str else 0
    
    return answer