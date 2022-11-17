function solution(survey, choices) {
    let answer = "";            
    
    const survey_map = new Map();
    survey_map.set('R',0);
    survey_map.set('T',0);
    survey_map.set('C',0);
    survey_map.set('F',0);
    survey_map.set('J',0);
    survey_map.set('M',0);
    survey_map.set('A',0);
    survey_map.set('N',0);

    survey.forEach((v,i)=>{
        let [type1,type2] = v.split(""); 
        let score = choices[i];
        
        if(score<4){
            survey_map.set(type1,4-score+survey_map.get(type1));
        }
        else if(score>4){
            survey_map.set(type2,score-4+survey_map.get(type2));
        }        
    });
    
    if(survey_map.get('R')>=survey_map.get('T')){
        answer += "R";
    }
    else if(survey_map.get('R')<survey_map.get('T')){
        answer += "T";
    } 
    if(survey_map.get('C')>=survey_map.get('F')){
        answer += "C";
    }
    else if(survey_map.get('C')<survey_map.get('F')){
        answer += "F";
    }   
    if(survey_map.get('J')>=survey_map.get('M')){
        answer += "J";
    }
    else if(survey_map.get('J')<survey_map.get('M')){
        answer += "M";
    } 
    if(survey_map.get('A')>=survey_map.get('N')){
        answer += "A";
    }
    else if(survey_map.get('A')<survey_map.get('N')){
        answer += "N";
    } 
        
    return answer;
}