def solution(num_list):
    answer = 0
    odd_list = ""
    even_list = ""
    
    for i in num_list:
        if i%2==0:
            even_list += str(i)
        else:
            odd_list += str(i)
    
    answer = int(even_list) + int(odd_list)
    
    return answer