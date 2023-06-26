-- 코드를 입력하세요
SELECT CAST(DATE_FORMAT(a.START_DATE,'%m') AS UNSIGNED) AS MONTH
      ,a.CAR_ID
      ,COUNT(a.HISTORY_ID) AS RECORDS
  FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY a INNER JOIN
                          (SELECT temp.CAR_ID
                                , COUNT(*) AS CNT
                             FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY temp
                            WHERE (temp.START_DATE BETWEEN '2022-08-01' AND '2022-10-31')                             
                            GROUP BY temp.CAR_ID
                           HAVING CNT >= 5) b
                                 ON b.CAR_ID = a.CAR_ID
 WHERE (START_DATE BETWEEN '2022-08-01' AND '2022-10-31')
 GROUP BY MONTH, CAR_ID
 ORDER BY MONTH ASC, CAR_ID DESC
 
