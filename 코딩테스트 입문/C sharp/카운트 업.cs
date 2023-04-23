using System;
using System.Linq;

public class Solution {
    public int[] solution(int start, int end) {
        int[] answer = new int[] {};
        answer = Enumerable.Range(start,end-start+1).ToArray();
        return answer;
    }
}