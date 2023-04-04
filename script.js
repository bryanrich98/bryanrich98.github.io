
            const table = document.querySelector('table');
            const cell1 = document.getElementById('cell1');
            const cell2 = document.getElementById('cell2');
            const cell3 = document.getElementById('cell3');
            const cell4 = document.getElementById('cell4');
            const cell5 = document.getElementById('cell5');
            const cell6 = document.getElementById('cell6');
            const cell7 = document.getElementById('cell7');
            const cell8 = document.getElementById('cell8');
            const cell9 = document.getElementById('cell9');
            const cell10 = document.getElementById('cell10');
            const cell11= document.getElementById('cell11');
            const cell12= document.getElementById('cell12');
            const cell13 = document.getElementById('cell13');
            const cell14= document.getElementById('cell14');
            const cell15= document.getElementById('cell15');
            const cell16 = document.getElementById('cell16');
            const cell17= document.getElementById('cell17');
            const cell18= document.getElementById('cell18');
            const cell19= document.getElementById('cell19');
            const cell20= document.getElementById('cell20');
            const cell21= document.getElementById('cell21');
            const cell22= document.getElementById('cell22');
            const cell23= document.getElementById('cell23');
            const cell24= document.getElementById('cell24');
            const cell25= document.getElementById('cell25');
            const cell26= document.getElementById('cell26');
            const cell27= document.getElementById('cell27');
            const cell28= document.getElementById('cell28');
            const cell29= document.getElementById('cell29');
            const cell30= document.getElementById('cell30');
            const cell31= document.getElementById('cell31');
            const cell32= document.getElementById('cell32');
            const cell33= document.getElementById('cell33');
            const cell34= document.getElementById('cell34');
            const cell35= document.getElementById('cell35');
            const cell36= document.getElementById('cell36');

            // Replace YOUR_SPREADSHEET_ID with the ID of your Google Sheet.
            const spreadsheetId = "1l4VUQPxG5f0aKyP5-xDD6BXaM4wHPfxc4lPBJJWFri0";
          
          // Replace YOUR_RANGE with the range of cells you want to read from.
          const range = "J12:J17";
          
          // Replace YOUR_API_KEY with your API key or OAuth 2.0 client ID.
          const apiKey = "AIzaSyDY1ECLPkN-1CdMAaDFhwiSpd-SGqiMrAc";
          // Use the fetch() function to make a GET request to the Sheets API.
          fetch(
            `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`
          )
            .then((response) => response.json())
            .then((data) => {
                var values = data.values;
                cell1.textContent = values[0];

                cell2.textContent = values[1];
                cell3.textContent = values[2];
                cell19.textContent = values[3];
                cell21.textContent = values[4];
                cell23.textContent = values[5];


            });
            fetch(
            `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/K12:K17?key=${apiKey}`
          )
            .then((response) => response.json())
            .then((data) => {
                var values = data.values;
                cell4.textContent = values[0];

                cell5.textContent = values[1];
                cell6.textContent = values[2];
                cell20.textContent = values[3];
                cell22.textContent = values[4];
                cell24.textContent = values[5];


            });
            fetch(
                      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Warrior%20Squadron!I11:I16?key=${apiKey}`
                  )
                      .then((response) => response.json())
                      .then((data) => {
                      var values = data.values;
                      cell7.textContent = values[0];

                      cell9.textContent = values[1];
                      cell11.textContent = values[2];
                      cell25.textContent = values[3];
                      cell27.textContent = values[4];
                      cell29.textContent = values[5];
                      });

                      fetch(
                      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Warrior%20Squadron!J11:J16?key=${apiKey}`
                  )
                      .then((response) => response.json())
                      .then((data) => {
                      var values = data.values;
                      cell8.textContent = values[0];

                      cell10.textContent = values[1];
                      cell12.textContent = values[2];
                      cell26.textContent = values[3];
                      cell28.textContent = values[4];
                      cell30.textContent = values[5];
                      });
                      fetch(
                      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Outstanding%20Squadron!A3:A8?key=${apiKey}`
                  )
                      .then((response) => response.json())
                      .then((data) => {
                      var values = data.values;
                      cell13.textContent = values[0];

                      cell15.textContent = values[1];
                      cell17.textContent = values[2];
                      cell31.textContent = values[3];
                      cell33.textContent = values[4];
                      cell35.textContent = values[5];
                      });

                      fetch(
                      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Outstanding%20Squadron!D3:D8?key=${apiKey}`
                  )
                      .then((response) => response.json())
                      .then((data) => {
                      var values = data.values;
                      cell14.textContent = values[0];

                      cell16.textContent = values[1];
                      cell18.textContent = values[2];
                      cell32.textContent = values[3];
                      cell34.textContent = values[4];
                      cell36.textContent = values[5];
                      });
                      
                      
