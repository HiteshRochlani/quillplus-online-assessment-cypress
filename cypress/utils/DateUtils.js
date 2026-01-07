export class DateUtils{
    static getConvertedDate(timer){
        const [hours, minutes, seconds] = timer.split(":")
        let currentDate = new Date()
        let date = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), parseInt(hours), parseInt(minutes), parseInt(seconds))
        return date
    }
}