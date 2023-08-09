def solution(my_string):
    answer = "".join(sorted(i for i in my_string.lower()))
    return answer