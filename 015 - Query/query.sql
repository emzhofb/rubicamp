-- 1
SELECT 
  nim, 
  nama, 
  alamat, 
  umur, 
  jurusan, 
  namajurusan 
FROM 
  mahasiswas, 
  jurusans 
WHERE 
mahasiswas.jurusan = jurusans.jurusanId;

-- 2
SELECT * FROM mahasiswas WHERE umur < 20;

-- 3
SELECT 
  nama, 
  nilai 
FROM 
  mahasiswas, 
  reports 
WHERE 
  mahasiswas.nim = reports.nim 
AND 
  reports.nilai <= "B";

-- 4

-- 5
SELECT 
  mahasiswas.nama, 
  matakuliahs.sks 
FROM 
  mahasiswas, 
  reports, 
  matakuliahs 
WHERE 
  mahasiswas.nim = reports.nim 
AND 
  reports.matakuliah = matakuliahs.mkId 
AND 
  matakuliahs.sks = "Data Mining";

-- 6

-- 7
SELECT 
  nama, 
  umur 
FROM 
  mahasiswas 
ORDER BY 
  umur 
ASC;

-- 8
