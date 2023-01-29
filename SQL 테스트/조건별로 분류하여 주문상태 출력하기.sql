-- 코드를 입력하세요
SELECT a.ORDER_ID, a.PRODUCT_ID, 
       DATE_FORMAT(a.OUT_DATE,'%Y-%m-%d') AS 'OUT_DATE',
       CASE WHEN DATE_FORMAT(a.OUT_DATE,'%m-%d') <= '05-01' THEN '출고완료'
            WHEN DATE_FORMAT(a.OUT_DATE,'%m-%d') > '05-01' THEN '출고대기' 
            WHEN IFNULL(a.OUT_DATE,'') = '' THEN '출고미정'
            ELSE '' END AS '출고여부'
  FROM FOOD_ORDER a
 ORDER BY a.ORDER_ID