-- 코드를 입력하세요
SELECT a.ANIMAL_TYPE, IFNULL(a.NAME,'No name') as 'NAME', a.SEX_UPON_INTAKE
  FROM ANIMAL_INS a
 ORDER BY a.ANIMAL_ID