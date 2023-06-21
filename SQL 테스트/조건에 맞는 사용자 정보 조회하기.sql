-- 코드를 입력하세요
SELECT b.USER_ID, 
       b.NICKNAME, 
       CONCAT(b.CITY,' ',b.STREET_ADDRESS1,' ',b.STREET_ADDRESS2) AS '전체주소',        
       CONCAT(SUBSTR(TLNO,1,3),'-',SUBSTR(TLNO,4,4),'-',SUBSTR(TLNO,8,4)) AS '전화번호'
  FROM USED_GOODS_BOARD a LEFT JOIN USED_GOODS_USER b
                                 ON b.USER_ID = a.WRITER_ID
 GROUP BY b.USER_ID
 HAVING COUNT(a.BOARD_ID)>=3
 ORDER BY b.USER_ID desc