-- 코드를 입력하세요

SELECT *
  FROM PLACES a
 WHERE a.HOST_ID IN ( SELECT HOST_ID
                        FROM PLACES
                       GROUP BY HOST_ID
                      HAVING COUNT(ID) >=2
                    )
 ORDER BY a.ID