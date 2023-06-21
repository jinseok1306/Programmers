-- 코드를 입력하세요
SELECT DISTINCT a.CART_ID
  FROM CART_PRODUCTS a
 WHERE a.CART_ID IN (SELECT CART_ID
                       FROM CART_PRODUCTS 
                      WHERE NAME = 'Milk'  
                     )
   AND a.CART_ID IN (SELECT CART_ID
                       FROM CART_PRODUCTS 
                      WHERE NAME = 'Yogurt'   
                    )
ORDER BY a.CART_ID
    
 

 
 
 