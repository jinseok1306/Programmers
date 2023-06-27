-- 코드를 입력하세요
SELECT t.SALES_DATE, t.PRODUCT_ID, t.USER_ID, t.SALES_AMOUNT
  FROM  
        (SELECT DATE_FORMAT(a.SALES_DATE,'%Y-%m-%d') AS SALES_DATE
              ,a.PRODUCT_ID
              ,a.USER_ID
              ,a.SALES_AMOUNT
          FROM ONLINE_SALE a
         WHERE DATE_FORMAT(a.SALES_DATE,'%Y-%m') = '2022-03'
         UNION ALL
        SELECT DATE_FORMAT(a.SALES_DATE,'%Y-%m-%d') AS SALES_DATE
              ,a.PRODUCT_ID
              ,NULL AS USER_ID
              ,a.SALES_AMOUNT
          FROM OFFLINE_SALE a
         WHERE DATE_FORMAT(a.SALES_DATE,'%Y-%m') = '2022-03'
         ) t
ORDER BY t.SALES_DATE, t.PRODUCT_ID, t.USER_ID

 
 