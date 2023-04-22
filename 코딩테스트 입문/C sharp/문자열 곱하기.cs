using System;
using System.Linq;

public class Solution {
    public string solution(string my_string, int k) {
        string answer = String.Concat(Enumerable.Repeat(my_string,k));
        return answer;
    }
}