using System;
using System.Linq;

public class Solution {
    public int[] solution(int[] num_list) {
        int[] answer = new int[2] {num_list.Count(x=>x%2==0),num_list.Count(x=>x%2!=0)};
        return answer;
    }
}