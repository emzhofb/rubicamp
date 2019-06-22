-- Create a new database
sqlite3 university.db

-- Create table mahasiswas
CREATE TABLE mahasiswas (
  nim INTEGER PRIMARY KEY, 
  nama TEXT NOT NULL, 
  alamat TEXT NOT NULL, 
  umur TEXT NOT NULL,
  jurusan INTEGER NOT NULL, 
      FOREIGN KEY (jurusan) REFERENCES jurusans(id)
);

-- Insert values to mahasiswas
INSERT INTO mahasiswas ( 
  nim, 
  nama, 
  alamat, 
  umur,
  jurusan 
) VALUES ( 
  1111, 
  "Ikhda Muhammad Wildani", 
  "Jepara", 
  20,
  1
);

INSERT INTO mahasiswas ( 
  nim, 
  nama, 
  alamat, 
  umur,
  jurusan 
) VALUES ( 
  2222, 
  "John Doe", 
  "Los Angeles", 
  23,
  2 
);

-- Create table jurusans
CREATE TABLE jurusans (
  jurusanId INTEGER PRIMARY KEY, 
  namajurusan TEXT NOT NULL 
);

-- Insert value to jurusans
INSERT INTO jurusans ( namajurusan ) VALUES ( "Bahasa Jepang" );
INSERT INTO jurusans ( namajurusan ) VALUES ( "Bahasa Indonesia" );

-- Create table dosens
CREATE TABLE dosens ( nip INTEGER PRIMARY KEY, namadosen TEXT NOT NULL );

-- Insert value to dosens
INSERT INTO dosens ( namadosen ) VALUES ( "Genta Perdana" );
INSERT INTO dosens ( namadosen ) VALUES ( "Aika Sonoda" );

-- Create table matakuliahs
CREATE TABLE matakuliahs ( 
  mkId INTEGER PRIMARY KEY, 
  nama INTEGER NOT NULL, 
  sks TEXT NOT NULL, 
      FOREIGN KEY (nama) REFERENCES jurusans(id)
);

-- Insert value to matakuliahs
INSERT INTO matakuliahs ( nama, sks ) VALUES ( 1, "Hiragana" );
INSERT INTO matakuliahs ( nama, sks ) VALUES ( 1, "Katakana" );
INSERT INTO matakuliahs ( nama, sks ) VALUES ( 1, "Kanji" );
INSERT INTO matakuliahs ( nama, sks ) VALUES ( 2, "Tata Bahasa" );
INSERT INTO matakuliahs ( nama, sks ) VALUES ( 2, "Peribahasa" );

-- Create table reports
CREATE TABLE reports (
  id INTEGER PRIMARY KEY, 
  mahasiswa INTEGER NOT NULL, 
  dosen INTEGER NOT NULL, 
  matakuliah INTEGER NOT NULL, 
  nilai TEXT NOT NULL, 
      FOREIGN KEY (mahasiswa) REFERENCES mahasiswas(nim),
      FOREIGN KEY (dosen) REFERENCES dosens(nip)
      FOREIGN KEY (matakuliah) REFERENCES matakuliahs(mkId)
);

-- Insert values to reports
INSERT INTO reports ( 
  nim, 
  dosen, 
  matakuliah, 
  nilai 
) VALUES ( 
  1111, 
  1, 
  1, 
  "A"
);

INSERT INTO reports ( 
  nim, 
  dosen, 
  matakuliah, 
  nilai 
) VALUES ( 
  1111, 
  1, 
  2, 
  "A"
);

INSERT INTO reports ( 
  nim, 
  dosen, 
  matakuliah, 
  nilai 
) VALUES ( 
  1111, 
  1, 
  3, 
  "B"
);

INSERT INTO reports ( 
  nim, 
  dosen, 
  matakuliah, 
  nilai 
) VALUES ( 
  2222, 
  2, 
  4, 
  "B"
);

INSERT INTO reports ( 
  nim, 
  dosen, 
  matakuliah, 
  nilai 
) VALUES ( 
  2222, 
  2, 
  5, 
  "C"
);

-- How to see value in the tables
SELECT * FROM mahasiswas;
SELECT * FROM dosens;
SELECT * FROM jurusans;
SELECT * FROM matakuliahs;
SELECT * FROM reports;

-- How to delete table
DROP TABLE mahasiswas;
DROP TABLE dosens;
DROP TABLE jurusans;
DROP TABLE matakuliahs;
