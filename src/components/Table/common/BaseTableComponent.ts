export interface TableParam {
    name:string;
    value:string;
    unit:string
}
export interface TableConfig {
    width:number;
    height:number;
    column:{
        index:number
        title:string
        param:string
    }[]
}

/**
 * Canvas 组件用户接口
 */
export interface TableComponent<T> {
    /**
     * 更新数据
     * @param currentData 当前值
     */
    update(tableData: T): void;
  
    /**
     * 更新尺寸
     * @param size 尺寸
     */
    resize(width: number, height: number): void;
  }

  export class BaseTableComponent<T>
  implements TableComponent<T>
  {
    #tableConfig: TableConfig; 
    #tableParam: T;
    #initialized = false;
    
    constructor(config: TableConfig, param: T) {
        this.#tableConfig = config;
        this.#tableParam = param
    } 
    
    update(currentParam: T): void {
        if (this.#initialized) {
            this.#tableParam = currentParam;
        }
    }
    resize(width: number, height: number): void {
        throw new Error("Method not implemented.");
    }
    
    init(initialConfig:TableConfig, initialData:T): void {
        this.#initialized = true;
        this.#tableConfig = initialConfig;
        this.#tableParam = initialData;
    }
    getCurrentParan() {
        return this.#tableParam;
      }
  }