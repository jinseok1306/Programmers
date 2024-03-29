-- 코드를 입력하세요
SELECT a.BOARD_ID, a.WRITER_ID, a.TITLE, a.PRICE, 
       CASE WHEN a.STATUS = 'SALE' THEN '판매중'
            WHEN a.STATUS = 'RESERVED' THEN '예약중'
            WHEN a.STATUS = 'DONE' THEN '거래완료' END AS 'STATUS'
  FROM USED_GOODS_BOARD a
 WHERE DATE_FORMAT(a.CREATED_DATE,'%Y-%m-%d') = '2022-10-05'
 ORDER BY a.BOARD_ID desc