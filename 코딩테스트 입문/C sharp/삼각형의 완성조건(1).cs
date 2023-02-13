using System;
using System.Linq;

public class Solution {
    public int solution(int[] sides) {
        int[] arr = sides.OrderBy(n=>n).ToArray();        
        int answer = arr[2]<arr[0]+arr[1] ? 1 : 2;
                        
        return answer;
    }
}