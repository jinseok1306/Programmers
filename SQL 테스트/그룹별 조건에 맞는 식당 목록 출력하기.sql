-- 코드를 입력하세요
SET @max_val = 0;
SELECT @max_val := MAX(a.CNT)
  FROM (SELECT MEMBER_ID, COUNT(REVIEW_ID) AS CNT
  FROM REST_REVIEW 
 GROUP BY MEMBER_ID ) a;

SELECT y.MEMBER_NAME, x.REVIEW_TEXT, DATE_FORMAT(x.REVIEW_DATE,'%Y-%m-%d') AS REVIEW_DATE
  FROM REST_REVIEW x LEFT JOIN MEMBER_PROFILE y
                            ON y.MEMBER_ID = x.MEMBER_ID
 WHERE x.MEMBER_ID IN (SELECT a.MEMBER_ID
                         FROM (SELECT MEMBER_ID, COUNT(REVIEW_ID) AS CNT
                                 FROM REST_REVIEW 
                                GROUP BY MEMBER_ID ) a
                        WHERE a.CNT = @max_val)        
 ORDER BY x.REVIEW_DATE ASC, x.REVIEW_TEXT ASC
;