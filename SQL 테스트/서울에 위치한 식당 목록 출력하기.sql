-- 코드를 입력하세요
SELECT a.REST_ID, b.REST_NAME, b.FOOD_TYPE, b.FAVORITES, b.ADDRESS,
       ROUND(AVG(a.REVIEW_SCORE),2) AS 'SCORE'
  FROM REST_REVIEW a LEFT JOIN REST_INFO b
                            ON b.REST_ID = a.REST_ID
 WHERE b.ADDRESS LIKE '서울%'        
 GROUP BY a.REST_ID
 ORDER BY ROUND(AVG(a.REVIEW_SCORE),2) desc, b.FAVORITES desc
 