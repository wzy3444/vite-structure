// export interface MeasureParam {
//     Abbr: string;
    
//     AlarmCeiling?: string;
    
//     AlarmFloor?: string;
    
//     AuxSubSystemId?: number;
    
//     DataType: number;
    
//     Descr:string;
    
//     Id:number;
    
//     Name:string;
//     /* 是否显示 */
//     NotShow:number;
//     /* 显示到界面上的描述 */
//     ShowDescr:string;
//     /* 子系统id */
//     SubSystemId:number;
    
//     Unit:string
    
//     Weight:number;
    
//     precise:number;
// }

export interface MapTableParam {
    name:string;
    value:string;
    unit:string
}
export interface MapTableConfig {
    width:number;
    column:{
        index:number
        title:string
        param:string
    }[]
}