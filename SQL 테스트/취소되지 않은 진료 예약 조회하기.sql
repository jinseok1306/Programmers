-- 코드를 입력하세요
SELECT a.APNT_NO, b.PT_NAME, a.PT_NO, a.MCDP_CD, c.DR_NAME, a.APNT_YMD
  FROM APPOINTMENT a LEFT JOIN PATIENT b
                            ON b.PT_NO = a.PT_NO
                     LEFT JOIN DOCTOR c
                            ON c.DR_ID = a.MDDR_ID
 WHERE a.APNT_CNCL_YN = 'N'
   AND DATE_FORMAT(a.APNT_YMD,'%Y-%m-%d') = '2022-04-13'
 ORDER BY APNT_YMD
 