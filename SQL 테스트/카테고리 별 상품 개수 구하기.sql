-- 코드를 입력하세요
SELECT LEFT(a.PRODUCT_CODE,2) AS 'CATEGORY', COUNT(LEFT(a.PRODUCT_CODE,2)) AS 'PRODUCTS'
  FROM PRODUCT a
 GROUP BY LEFT(a.PRODUCT_CODE,2)