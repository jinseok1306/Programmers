-- 코드를 입력하세요
SELECT a.ANIMAL_ID, 
       a.NAME,
       CASE WHEN a.SEX_UPON_INTAKE LIKE '%Neutered%' THEN 'O'
            WHEN a.SEX_UPON_INTAKE LIKE '%Spayed%' THEN 'O'
            ELSE 'X' END as '중성화'
  FROM ANIMAL_INS a
 ORDER BY a.ANIMAL_ID, a.NAME, a.SEX_UPON_INTAKE