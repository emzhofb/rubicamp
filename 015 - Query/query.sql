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
