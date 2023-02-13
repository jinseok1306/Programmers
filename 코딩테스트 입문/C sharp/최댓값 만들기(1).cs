using System;
using System.Linq;

public class Solution {
    public int solution(int[] numbers) {
        int answer = 0;
        
        int[] arr = numbers.OrderByDescending(n=>n).ToArray();
                
        return arr[0]*arr[1];
    }
}