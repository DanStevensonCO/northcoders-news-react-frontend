export const dateFormatter = (unixDate) => {
    let dateObj = new Date(unixDate)
    
    let dateElems = dateObj.toString().split(" ")

    let formattedDate =
        dateElems[2] + " " +
        dateElems[1] + " " +
        dateElems[3]
    
    return formattedDate
}