-- 코드를 입력하세요
SELECT a.CATEGORY, a.PRICE as 'MAX_PRICE', a.PRODUCT_NAME
  FROM FOOD_PRODUCT a 
 WHERE a.PRICE IN (SELECT MAX(b.PRICE)
                     FROM FOOD_PRODUCT b
                    GROUP BY b.CATEGORY)
   AND a.CATEGORY IN ('과자','국','김치','식용유')
 ORDER BY MAX_PRICE desc
                   
                 
        