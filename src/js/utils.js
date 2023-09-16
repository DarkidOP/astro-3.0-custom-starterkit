
// checks if the string is emty & retuns optalParams or the string or null
export function emptyStringChecker(string , optinalPassedString){
    if(string === undefined || string  === null || string  === "" || string === false){
        if(optinalPassedString === undefined || optinalPassedString == null || optinalPassedString == ""){
        return null;} else return optinalPassedString;
    } else return (string)
}


// multiplies an array
export function arrayMultiplier(array, multiplyBy){
    let returnArray = [];
    for(let i = 0; i < multiplyBy; i++){
        for(let j = 0; j < array.length; j++){
            returnArray.push(array[j]);
        }
    }
    return returnArray;
}

// qr generator 
export function qrCodeGen(link, size){
    let returnValue;
    let qrValue = link, 
    qrSize = "250";
    if(size){qrSize = size;}
    if(!qrValue) return "no link found";
    returnValue = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${qrValue}`;
    return returnValue;
}



// sends a boxicon icon
export function getSocialIcon (platform){
    if(!platform) return "invalid platform objec";
    let platformIcons = [
        {
            name: 'instagram',
            icon: 'instagram-alt'
        },
        {
            name: 'discord',
            icon: 'discord-alt'
        },
        {
            name: 'facebook',
            icon: 'facebook-circle'
        },
        {
            name: 'website',
            icon: 'world'
        },
    ]
    let returnIcon = `bx bxl-${platform.name.toLowerCase()}`;
    platformIcons.forEach(icon => {
        if(platform.name.toLowerCase() == icon.name){
                returnIcon = `bx bxl-${icon.icon}`;
        }
    })
    return returnIcon;
}