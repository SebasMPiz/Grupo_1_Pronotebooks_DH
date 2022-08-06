insert into pronotebooks.Users (Id, name, last_name, email, password, phone, country, id_category, id_imageUsers) values (1, 'Billy', 'Catonne', 'bcatonne0@virginia.edu', 'k6fSLThvK', 688, 'Egypt', 0, 0);
insert into pronotebooks.Users (Id, name, last_name, email, password, phone, country, id_category, id_imageUsers) values (2, 'Brody', 'Newlan', 'bnewlan1@biblegateway.com', 'ohcw1oE', 322, 'China', 0, 0);
insert into pronotebooks.Users (Id, name, last_name, email, password, phone, country, id_category, id_imageUsers) values (3, 'Malanie', 'Bryson', 'mbryson2@topsy.com', 'oxyCvMedpj', 544, 'Croatia', 0, 0);
insert into pronotebooks.Users (Id, name, last_name, email, password, phone, country, id_category, id_imageUsers) values (4, 'Pavlov', 'Fenney', 'pfenney3@pbs.org', 'NRkhBp8Fl', 237, 'Cameroon', 0, 0);
insert into pronotebooks.Users (Id, name, last_name, email, password, phone, country, id_category, id_imageUsers) values (5, 'Hilliary', 'Linstead', 'hlinstead4@irs.gov', 'CaS3uJ', 913, 'Bulgaria', 0, 0);

UPDATE `pronotebooks`.`Users` SET `id_category` = '1', `id_imageUsers` = '1' WHERE (`Id` = '1');
UPDATE `pronotebooks`.`Users` SET `id_category` = '2', `id_imageUsers` = '2' WHERE (`Id` = '2');
UPDATE `pronotebooks`.`Users` SET `id_category` = '1', `id_imageUsers` = '4' WHERE (`Id` = '4');
UPDATE `pronotebooks`.`Users` SET `id_category` = '1', `id_imageUsers` = '5' WHERE (`Id` = '5');
UPDATE `pronotebooks`.`Users` SET `id_category` = '2', `id_imageUsers` = '3' WHERE (`Id` = '3');

