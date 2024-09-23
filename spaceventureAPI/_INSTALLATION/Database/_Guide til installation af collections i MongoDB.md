
# Restore data til MongoDB

1. Opret en mappe med fx navnet "mongodb" på C-drevet (VIGTIGT - det SKAL være på c-drevet) 

2. Kopier spaceventure-mappen (ligger i mappen her) ind i mappen, du lige har lavet på c-drevet

	1. så du har `C:\mongodb\spaceventure`
	2. og i spaceventure-mappen ligger alle json-filerne til at genskabe databasen

3. Brug "**Stifinder**" og find bin-mappen i MongoDBs Tools-mappe - det ser ca. sådan her ud: 
    
    	C:\Program Files\MongoDB\Tools\100\bin
    

4. I adresselinjen i Stifinder (hvor du kan se, at du står i bin-mappen), marker teksten/adressen og (over)skriv med "**cmd**" - dvs. du overskriver bin-mappens sti

5. **Tryk ENTER**, så åbner kommandovinduet og peger på bin-mappen (tjek det - spørg, hvis du er i tvivl)

8. Kopier kommandoen herunder (vær omhyggelig med at få det hele med):

    	mongorestore -d spaceventure C:\mongodb\spaceventure
    
9. Paste/indsæt kommandoen (du skal stadig være i bin-mappen) og **tryk ENTER**

10. Nu burde MongoDB restore/genskabe databasen i din mongoDB

11. Åbn MongoDB (localhost)

12. Tryk på refresh og tjek, at den nye database er oprettet, og at der er collections med documents og data import

13. Start din backend-server/API (med `npm run start` eller `npm run devStart`) og tjek, at server og databaseserver starter op

14. Sørg for at have import'et Postman-json-filen i Postman - kør nogle af GET-request'ene og tjek, at du får data, og at der ikke er fejl