// hides the original object
function GeoCoder(){    
    this.getLongitudeAndLatitude = function(address){

        if (address === "Amsterdam") {
            return "52.3700° N, 4.8900° E";
        } else if (address === "London") {
            return "51.5171° N, 0.1062° W";
        } else if (address === "Paris") {
            return "48.8742° N, 2.3470° E";
        } else if (address === "Berlin") {
            return "52.5233° N, 13.4127° E";
        } else {
            return "";
        }
    }
}

function GeoProxy(){
    let geoCoder = new GeoCoder();
    let geoCache = {};

    return {
        getLongitudeAndLatitude: function(address){

            if(!geoCache[address]){
                geoCache[address] = geoCoder.getLongitudeAndLatitude(address);
            }
            console.log(address + ": " + geoCache[address]);
            return geoCache[address];
        },
        getCount: function(){
            let count =0;
            for(let code in geoCache){
                count++;
            }
            return count;
        }
    }
}


function run() {

    var geo = new GeoProxy();

    // geolocation requests

    geo.getLongitudeAndLatitude("Paris");
    geo.getLongitudeAndLatitude("London");
    geo.getLongitudeAndLatitude("London");
    geo.getLongitudeAndLatitude("London");
    geo.getLongitudeAndLatitude("London");
    geo.getLongitudeAndLatitude("Amsterdam");
    geo.getLongitudeAndLatitude("Amsterdam");
    geo.getLongitudeAndLatitude("Amsterdam");
    geo.getLongitudeAndLatitude("Amsterdam");
    geo.getLongitudeAndLatitude("London");
    geo.getLongitudeAndLatitude("London");

    console.log("\nCache size: " + geo.getCount());
    
}

run();