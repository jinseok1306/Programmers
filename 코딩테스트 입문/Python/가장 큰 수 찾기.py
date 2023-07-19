def solution(array):        
    maxVal = max(array)
    maxIndex = array.index(maxVal)
    
    return [maxVal,maxIndex]