-- 코드를 입력하세요
SELECT DISTINCT b.CAR_ID
  FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY a LEFT JOIN CAR_RENTAL_COMPANY_CAR b
                                                  ON b.CAR_ID = a.CAR_ID
WHERE b.CAR_TYPE = '세단'
  AND DATE_FORMAT(a.START_DATE,'%m') = '10'
ORDER BY b.CAR_ID desc