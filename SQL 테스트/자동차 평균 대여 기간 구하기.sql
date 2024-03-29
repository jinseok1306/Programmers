-- 코드를 입력하세요
SELECT a.CAR_ID, ROUND(AVG(a.AVERAGE_DURATION),1) AS AVERAGE_DURATION
  FROM (SELECT CAR_ID, DATEDIFF(END_DATE, START_DATE)+1 AS AVERAGE_DURATION
          FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY 
       ) a
 GROUP BY a.CAR_ID
 HAVING AVERAGE_DURATION >= 7
 ORDER BY AVERAGE_DURATION desc, a.CAR_ID desc