    // EU member countries' ISO Alpha-3 codes
    var euCountries = ['ITA', 'SRB', 'ROU', 'SVN', 'FIN', 'DNK'];

// Assuming you have your geoJSON data and other plotly configuration in 'data' variable
        var data = [
        {
            type: 'choropleth',
            geojson: yourGeoJSONData, // Replace with your geoJSON data
            locations: euCountries,  // Pass the list of EU countries as locations
            z: [1, 1, 1, 1, 1, 1],   // Assign a value (e.g., 1) to each country
            colorscale: 'Viridis',  // Choose a colorscale
            showscale: false,       // Hide the color scale if needed
            colorbar: {            // Optional: Customize the color bar
            title: 'Highlight',
            titleside: 'top',
            tickvals: [1],
            ticktext: ['EU Countries']
            }
        }
        ];

        // Configure the layout, e.g., map projection and other settings
        var layout = {
        geo: {
            projection: {
            type: 'mercator'  // Adjust as needed
            }
        },
        
        margin: {
            l: 0, // Set the left margin to 0
            r: 0, // Set the right margin to 0
            t: 0, // Set the top margin to 0
            b: 0  // Set the bottom margin to 0
        },
        width: 900,
        height: 600,
        zoom: 5,
    };

    // Plot the figure
    Plotly.newPlot('myDiv', data, layout).then(function() {
    document.getElementById('myDiv').on('plotly_click', function(data){
        var countryName = data.points[0].location; // Get the country name
        document.getElementById('countryName').textContent = 'Clicked Country: ' + countryName;
    });
});

    // Function to handle click events on the map
    document.getElementById('myDiv').on('plotly_click', function(data){
    console.log(data); // Log the data to see its structure
    var countryName = data.points[0].location;
    document.getElementById('countryName').textContent = 'Clicked Country: ' + countryName;
    displayProgress(countryName);
});

function displayProgress(countryCode) {
    var countryData = {
    'AUT': { literacyRate: 98, otherRate: 80 }, // Austria
    'BEL': { literacyRate: 99, otherRate: 82 }, // Belgium
    'BGR': { literacyRate: 95, otherRate: 77 }, // Bulgaria
    'HRV': { literacyRate: 99, otherRate: 81 }, // Croatia
    'CYP': { literacyRate: 97, otherRate: 85 }, // Cyprus
    'CZE': { literacyRate: 99, otherRate: 87 }, // Czech Republic
    'DNK': { literacyRate: 99, otherRate: 88 }, // Denmark
    'EST': { literacyRate: 99, otherRate: 89 }, // Estonia
    'FIN': { literacyRate: 100, otherRate: 91 }, // Finland
    'FRA': { literacyRate: 99, otherRate: 83 }, // France
    'DEU': { literacyRate: 99, otherRate: 85 }, // Germany
    'GRC': { literacyRate: 97, otherRate: 79 }, // Greece
    'HUN': { literacyRate: 99, otherRate: 82 }, // Hungary
    'IRL': { literacyRate: 99, otherRate: 84 }, // Ireland
    'ITA': { literacyRate: 99, otherRate: 77 }, // Italy
    'LVA': { literacyRate: 99, otherRate: 86 }, // Latvia
    'LTU': { literacyRate: 100, otherRate: 88 }, // Lithuania
    'LUX': { literacyRate: 100, otherRate: 90 }, // Luxembourg
    'MLT': { literacyRate: 92, otherRate: 80 }, // Malta
    'NLD': { literacyRate: 99, otherRate: 87 }, // Netherlands
    'POL': { literacyRate: 99, otherRate: 84 }, // Poland
    'PRT': { literacyRate: 95, otherRate: 78 }, // Portugal
    'ROU': { literacyRate: 98, otherRate: 80 }, // Romania
    'SVK': { literacyRate: 99, otherRate: 85 }, // Slovakia
    'SVN': { literacyRate: 99, otherRate: 86 }, // Slovenia
    'ESP': { literacyRate: 98, otherRate: 80 }, // Spain
    'SWE': { literacyRate: 99, otherRate: 89 }  // Sweden
};
  var dataForCountry = countryData[countryCode];
  var perc1 = dataForCountry.literacyRate;
  var perc2 = dataForCountry.otherRate;
    function move(perc1, perc2) {
    var elem1 = document.getElementById("myBar1");
    var elem2 = document.getElementById("myBar2");
    var width1 = 1;
    var width2 = 1;
    var id1 = setInterval(frame1, 50);
    var id2 = setInterval(frame2, 50);

    function frame1() {
      if (width1 >=perc1) {
        clearInterval(id);
      } else {
        width1++; 
        elem1.style.width = width1 + '%';
      }
      }
    function frame2() {
      if (width2 >= perc2) {
        clearInterval(id);
      } else {
        width2++; 
        elem2.style.width = width2 + '%'; 
      }
      }
    function frame3() {
    if (width3 >= perc3) {
        clearInterval(id);
    } else {
        width3++; 
        elem2.style.width = width3 + '%'; 
    }
    }
  
}
move(dataForCountry.literacyRate, dataForCountry.otherRate);
}
