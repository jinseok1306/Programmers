## 문법 정리

### 1. Javascript  
1\) 문자열 치환하기  
``` javascript
let str = '자바스크립트';

console.log(str.replace(/[자]/g,""));
//결과 : 바스크립트
```  
2\) 인덱스 구하기
``` javascript
//앞에서부터 찾기
let str = '1234567891';

let first = str.indexOf('1');

console.log(first);
//결과 : 0

//뒤에서부터 찾기
let last = str.lastIndexOf('1');      

console.log(last);
//결과 : 9
```  

3\) 문자열 자르기
``` javascript
let str = '자바스크립트';

let result1 = str.substr(0, 2);
// 결과 : "자바"

let result2 = str.substring(0, 2);
// 결과 : "자바"

let result3 = str.substring(2);
// 결과 : "스크립트"

let result4 = str.slice(0, 2);
// 결과 : "자바"

let result5 = str.slice(2);
// 결과 : "스크립트"

let result6 = str.slice(-4);
// 결과 : "스크립트"
```  

4\) 거듭제곱 연산
``` javascript
console.log(2 ** 3)   // 8

console.log(Math.pow(2,3)) //8
```

5\) 문자열 나누기
``` javascript
let str = "자바스크립트";
let arr = str.split("");

console.log(arr);
// 결과 : ['자' '바' '스' '크' '립' '트']
```

6\) map으로 배열 컨트롤하기
``` javascript
let arr = [1,2,3,4,5];
let temp = arr.map((v)=>v*2);

console.log(temp);
//결과 : [2, 4, 6, 8, 10]
```  

7\) 삼항 연산자
``` javascript
let age = 26;
let beverage = (age >= 21) ? "Beer" : "Juice";
console.log(beverage); 
//결과 : "Beer"
```  

8\) 배열 생성하기
``` javascript
//1차원 빈 배열
let arr = [];

//1차원 배열
let arr1 = new Array(5).fill(0);

console.log(arr1);
//결과 : [0, 0, 0, 0, 0]

//배열 값 추가하기
arr1.push(1);

//맨 앞에 배열값 추출하기(배열에서 삭제됨)
arr.shift();

//맨 뒤에 배열값 추출하기(배열에서 삭제됨)
arr.pop();

//2차원 배열
let arr2 = Array.from(Array(3), () => Array(3).fill(0));  

console.log(arr2);
//결과 : [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
```  

9\) 요일 구하기
``` javascript
let dayOfWeek = new Date('2023-06-22').getDay();

//0:일, 1:월, 2:화, 3:수, 4:목, 5:금, 6:토

console.log(dayOfWeek);
//결과 : 4
```  

10\) 객체 생성하기
``` javascript
let myObj = {};

//객체 값 추가(변경도 동일)
myObj['test'] = 1;

//객체 Key 값으로 Value 얻기
console.log(myObj['test']);
//결과 : 1

let obj = { 0: 'a', 1: 'b', 2: 'c' };

//객체의 Key 전부 추출하기
console.log(Object.keys(obj)); 
//결과 : ['0', '1', '2']

//객체의 Value 전부 추출하기
console.log(Object.values(obj)); 
//결과 : ['a', 'b', 'c']

```  

11\) Float Integar로 변환하기  
``` javascript
let n = parseInt(10.1);

console.log(n);
//결과 : 10
```  

12\) 소수점 처리하기
``` javascript
//소수 부분을 모두 버리고 정수만 리턴
console.log(Math.trunc(10.5));
//결과 : 10

//소수 첫째자리에서 버림 후 리턴
console.log(Math.floor(10.5));
//결과 : 10

//소수 첫째자리에서 올림 후 리턴
console.log(Math.ceil(13.3));
//결과 : 14

//소수 첫째자리에서 반올림 후 리턴
console.log(Math.floor(13.3));
//결과 : 13
```

13\) 대소문자 변환하기
``` javascript
//대문자로 변경하기
const str = "i want money a lot.";
upper_str = str.toUpperCase();

console.log(upper_str);
//결과 : "I WANT MONEY A LOT."

const str2 = "I WANT MONEY A LOT";

//toLowerCase()
lower_str = str2.toLowerCase();

console.log(lower_str);
//결과 : "i want money a lot."
```  

14\) ASCII 코드 변환하기
``` javascript
let ch = 'A';

console.log(ch.charCodeAt());
//결과 : 65

console.log(String.fromCharCode(65));
//결과 : 'A'
```  

15\) 특정 문자 포함여부 확인하기
``` javascript
let email = 'admin@example.com';

console.log(email.includes('@'));
//결과 : true

console.log(email.includes('&'));
//결과 : false
```  

16\) SET 생성하기
``` javascript
//SET 생성
let mySet = new Set();

//SET 추가
mySet.add(1);

//SET에 값이 있는지 확인
mySet.has(1);
//결과 : true

mySet.has(2);
//결과 : false

//SET 크기 확인
mySet.size; //1

//SET 배열로 변경
let arr = [...mySet];

//SET 삭제
mySet.delete(1);
```  

17\) 정렬하기
``` javascript
let arr = [2,1,3,5,4];

//오름차순
arr.sort((a,b)=>a-b);

//내림차순
arr.sort((a,b)=>b-a);
```  

18\) 배열 총합 구하기  
``` javascript
let arr = [1,2,3,4,5,6,7,8,9,10];
let sum = arr.reduce((a,c)=>a+c);

console.log(sum);
//결과 : 55
```  

19\) 최대값, 최소값 구하기
``` javascript
let arr = [1,50,100];

console.log(Math.max(...arr));
//결과 : 100

console.log(Math.min(...arr));
//결과 : 1
```  
20\) 문자열 숫자 변환하기
``` javascript
let str = "60";

console.log(Number(str));
//결과 : 60
```  

21\) 문자열 수식 계산하기  
``` javascript
console.log(eval('2 + 2'));
// 결과 : 4
```  

22\) 배열 합치기
``` javascript
let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];
let array3 = array1.concat(array2);

console.log(array3);
// 결과 : ["a", "b", "c", "d", "e", "f"]
```  

23\) 정수여부 체크하기
``` javascript
console.log(Number.isInteger(10));
//결과 : true

console.log(Number.isInteger(10.1));
//결과 : false
```  

24\) 반복문 사용하기
``` javascript
let arr = [1,2,3,4,5];

//for 활용
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

//forEach 활용
arr.forEach((v)=>{
    console.log(v);
});

//some 활용
arr.some((v)=>{
    console.log(v);
});
```  

### 2. Mysql  
1\) 요일 구하기
``` sql
SELECT DAYOFWEEK(NOW())

-- 1 = Sunday, 2 = Monday,..... 7 = Saturday
```

2\) 날짜 연산하기
``` sql
-- 현재 시간에 1초 더하기
SELECT DATE_ADD(NOW(), INTERVAL 1 SECOND);

-- 현재 시간에 1분 더하기
SELECT DATE_ADD(NOW(), INTERVAL 1 MINUTE);

-- 현재 시간에 1시간 더하기
SELECT DATE_ADD(NOW(), INTERVAL 1 HOUR);

-- 현재 시간에 1일 더하기
SELECT DATE_ADD(NOW(), INTERVAL 1 DAY);

-- 두 기간 사이의 일수 계산
SELECT DATEDIFF('2021-12-31','2021-01-02');
-- 결과 : 345
```

3\) 소수점 처리하기
``` sql
-- 반올림
SELECT ROUND(2.62) 
-- 결과 : 3

-- 소수점 자르기
SELECT TRUNCATE(2,62,0) 
-- 결과 : 2
```  

4\) 

