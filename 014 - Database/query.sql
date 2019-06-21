-- Create a new database
sqlite3 university.db

-- Create table mahasiswas
CREATE TABLE mahasiswas (
  id INTEGER PRIMARY KEY, 
  nim INTEGER NOT NULL UNIQUE, 
  nama TEXT NOT NULL, 
  alamat TEXT NOT NULL, 
  jurusan TEXT NOT NULL 
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
  "Bahasa Jepang" 
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
  "Bahasa Indonesia" 
);

-- Create table jurusans
CREATE TABLE jurusans (
  id INTEGER PRIMARY KEY, 
  namajurusan TEXT NOT NULL 
);

-- Insert value to jurusans
INSERT INTO jurusans ( namajurusan ) VALUES ( "Bahasa Indonesia" );
INSERT INTO jurusans ( namajurusan ) VALUES ( "Bahasa Jepang" );

-- Create table dosens
CREATE TABLE dosens ( id INTEGER PRIMARY KEY, nama TEXT NOT NULL );

-- Insert value to dosens
INSERT INTO dosens ( nama ) VALUES ( "Genta Perdana" );
INSERT INTO dosens ( nama ) VALUES ( "Aika Sonoda" );

-- Create table matakuliahs
CREATE TABLE matakuliahs ( id INTEGER PRIMARY KEY, nama TEXT NOT NULL, sks TEXT NOT NULL );

-- Insert value to matakuliahs
INSERT INTO matakuliahs ( nama, sks ) VALUES ( "Bahasa jepang", "Hiragana" );
INSERT INTO matakuliahs ( nama, sks ) VALUES ( "Bahasa jepang", "Katakana" );
INSERT INTO matakuliahs ( nama, sks ) VALUES ( "Bahasa jepang", "Kanji" );
INSERT INTO matakuliahs ( nama, sks ) VALUES ( "Bahasa indonesia", "Tata Bahasa" );
INSERT INTO matakuliahs ( nama, sks ) VALUES ( "Bahasa indonesia", "Peribahasa" );

-- How to see value in the tables
SELECT * FROM mahasiswas;
SELECT * FROM dosens;
SELECT * FROM jurusans;
SELECT * FROM matakuliahs;

-- How to delete table
DROP TABLE mahasiswas;
