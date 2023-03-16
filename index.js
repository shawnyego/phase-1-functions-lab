// Code your solution in this file!
function distanceFromHqInBlocks(block){
    if (block > 42){
        let distance = block - 42
        return distance
    }
    else if ( 42 > block){
        let distance = 42 - block
        return distance
    }
    distanceFromHqInFeet()
}
function distanceFromHqInFeet(block){
    if (block>42){
        let distance =(block-42)*264;
        return distance
    }
    if (block<42){
        let distance=(42-block)*264
        return distance
    }

    }
function distanceTravelledInFeet(start,destination){
    if(destination>start){
        let distance=(destination-start)*264
        return distance
    }
    if(start>destination){
        let distance=(start-destination)*264
        return distance
    }
    }
function calculatesFarePrice(start,destination){
    let distance=distanceTravelledInFeet(start,destination)
    if (distance<=400){
        const fare=0
        return fare
    }
    else if (distance<=2000){
        const fare=(distance-400)*0.02
        return fare
    }
    else if (distance<=2500){
        const fare=25
        return fare
    }
    else if (distance>2500){
        return 'cannot travel that far'
        
    }
}