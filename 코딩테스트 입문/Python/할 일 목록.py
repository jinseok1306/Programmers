def solution(todo_list, finished):
    answer = []
    
    for index, value in enumerate(todo_list):
        if finished[index] == False:
            answer.append(value)
            
    return answer