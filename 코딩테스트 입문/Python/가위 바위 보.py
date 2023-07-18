def solution(rsp):
    myObj = { '2':'0', '0':'5', '5':'2'}
    
    return ''.join(myObj[i] for i in rsp)