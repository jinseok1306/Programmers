-- 코드를 입력하세요
SELECT a.BOOK_ID, DATE_FORMAT(a.PUBLISHED_DATE,'%Y-%m-%d') AS 'PUBLISHED_DATE'
  FROM BOOK a
 WHERE a.CATEGORY = '인문'
   AND DATE_FORMAT(a.PUBLISHED_DATE,'%Y') = '2021'