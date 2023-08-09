def solution(my_string):
    answer = "".join(dict.fromkeys(list(my_string)))
    return answer