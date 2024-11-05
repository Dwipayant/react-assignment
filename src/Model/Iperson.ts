
export interface Iperson{
    tableDetails:tabledata[]
}

interface tabledata{
name :string,
email:string,
phone:number,
address:addresDetails[]
}

interface addresDetails{
    plot_No: number,
    landMark:string
}