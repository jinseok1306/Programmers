using System;
using System.Linq;

public class Solution {
    public int[] solution(string[] strlist) {
        int[] answer = strlist.Select(x => x.Length).ToArray();
        
        return answer;
    }
}