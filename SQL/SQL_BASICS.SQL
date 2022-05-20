
INSERT INTO hozzavalok (recipe_id,NAME,AMOUNT,UNIT) VALUE(1,"VIZ",5,"LITER");

DELETE FROM hozzavalok WHERE ID = 1;

UPDATE hozzavalok SET AMOUNT = 0.5 WHERE ID = 2 ;

SELECT * FROM recipe R JOIN hozzavalok H ON H.recipe_id = R.id ;

SELECT * FROM hozzavalok H JOIN recipe R ON H.recipe_id = R.id ;

CREATE INDEX hozzavalok_idx ON hozzavalok (id,name);