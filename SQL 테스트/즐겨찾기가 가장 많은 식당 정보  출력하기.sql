-- 코드를 입력하세요
SELECT a.FOOD_TYPE, a.REST_ID, a.REST_NAME, a.FAVORITES
  FROM REST_INFO a 
 WHERE (a.FOOD_TYPE, a.FAVORITES) in (SELECT b.FOOD_TYPE, MAX(b.FAVORITES)
                                        FROM REST_INFO b
                                       GROUP BY b.FOOD_TYPE)
ORDER BY a.FOOD_TYPE desc