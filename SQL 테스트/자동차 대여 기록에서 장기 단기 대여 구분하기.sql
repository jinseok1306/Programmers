-- 코드를 입력하세요
SELECT a.HISTORY_ID, 
       a.CAR_ID,
       DATE_FORMAT(a.START_DATE,'%Y-%m-%d') AS START_DATE,  
       DATE_FORMAT(a.END_DATE,'%Y-%m-%d') AS END_DATE,
       CASE WHEN DATEDIFF(a.END_DATE,a.START_DATE)+1 >= 30 THEN '장기 대여'
            ELSE  '단기 대여' END AS RENT_TYPE
  FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY a
 WHERE DATE_FORMAT(a.START_DATE, '%Y-%m') = '2022-09'
 ORDER BY a.HISTORY_ID DESC
   