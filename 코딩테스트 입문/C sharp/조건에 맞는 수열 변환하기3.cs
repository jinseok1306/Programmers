using System;
using System.Linq;

public class Solution {
    public int[] solution(int[] arr, int k) {
        int[] answer = new int[] {};
        
        if(k%2==0){
            answer = arr.Select(x=>x+k).ToArray();
        }
        else{
            answer = arr.Select(x=>x*k).ToArray();
        }
        
        return answer;
    }
}