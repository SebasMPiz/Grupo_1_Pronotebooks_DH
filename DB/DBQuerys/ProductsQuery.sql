SELECT * FROM pronotebooks.Products;

DELETE FROM pronotebooks.Products WHERE Id = 1;

insert into Products (id, discount, soldQuantity, processor, graphics, memory, expansionSlot, storage, operativeSystem, screenSize, computerCategory, color, price, description, id_imageProducts, id_brand) values (1, 0.28, 19, 'AMD A4 9120E 2 Nucleos / Freq. 2,2GHz', 'AMD Radeo', '4Gb DDR4 SODIMM', '0', '64Gb SSD', 'Win11', 17, 'Gaming', 'Black', 348571, 'Una descripcion genial', 1, 1);
insert into Products (id, discount, soldQuantity, processor, graphics, memory, expansionSlot, storage, operativeSystem, screenSize, computerCategory, color, price, description, id_imageProducts, id_brand) values (2, 0.63, 25, 'M1 7 core', 'M1', '8Gb', '0', '256Gb SSD', 'MacOS 10.14', 13, 'Home', 'Black', 367416, 'Una descripcion genial', 2, 2);
insert into Products (id, discount, soldQuantity, processor, graphics, memory, expansionSlot, storage, operativeSystem, screenSize, computerCategory, color, price, description, id_imageProducts, id_brand) values (3, 0.63, 82, 'AMD Ryzen™ 5 5500U', 'AMD Radeon', '8Gb DDR4', '0', '512Gb SSD', 'Win10 Pro', 15, 'Business', 'Black', 232683, 'Una descripcion genial', 3, 3);