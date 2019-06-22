-- Create a new database
sqlite3 university.db

-- Create table mahasiswas
CREATE TABLE mahasiswas (
  nim INTEGER PRIMARY KEY, 
  nama TEXT NOT NULL, 
  alamat TEXT NOT NULL, 
  jurusan INTEGER NOT NULL, 
      FOREIGN KEY (jurusan) REFERENCES jurusans(id),
);

-- Insert values to mahasiswas
INSERT INTO mahasiswas ( 
  nim, 
  nama, 
  alamat, 
  jurusan 
) VALUES ( 
  1111, 
  "Ikhda Muhammad Wildani", 
  "Jepara", 
  1
);

INSERT INTO mahasiswas ( 
  nim, 
  nama, 
  alamat, 
  jurusan 
) VALUES ( 
  2222, 
  "John Doe", 
  "Los Angeles", 
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
CREATE TABLE dosens ( nip INTEGER PRIMARY KEY, nama TEXT NOT NULL );

-- Insert value to dosens
INSERT INTO dosens ( nama ) VALUES ( "Genta Perdana" );
INSERT INTO dosens ( nama ) VALUES ( "Aika Sonoda" );

-- Create table matakuliahs
CREATE TABLE matakuliahs ( 
  mkId INTEGER PRIMARY KEY, 
  nama INTEGER NOT NULL, 
  sks TEXT NOT NULL, 
      FOREIGN KEY (nama) REFERENCES jurusans(id),
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
  nim INTEGER NOT NULL, 
  dosen INTEGER NOT NULL, 
  matakuliah INTEGER NOT NULL, 
  nilai TEXT NOT NULL, 
      FOREIGN KEY (namamahasiswa) REFERENCES mahasiswas(nim),
      FOREIGN KEY (dosen) REFERENCES dosens(nip)
      FOREIGN KEY (matakuliah) REFERENCES matakuliahs(mkId),
);

-- Insert values to reports
INSERT INTO reports ( 
  nim, 
  dosen, 
  matakuliah, 
  nilai 
) VALUES ( 
  1, 
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
  1, 
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
  1, 
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
  2, 
  2, 
  4, 
  "A"
);

INSERT INTO reports ( 
  nim, 
  dosen, 
  matakuliah, 
  nilai 
) VALUES ( 
  2, 
  2, 
  5, 
  "A"
);

-- How to see value in the tables
SELECT * FROM mahasiswas;
SELECT * FROM dosens;
SELECT * FROM jurusans;
SELECT * FROM matakuliahs;

-- How to delete table
DROP TABLE mahasiswas;
DROP TABLE dosens;
DROP TABLE jurusans;
DROP TABLE matakuliahs;
