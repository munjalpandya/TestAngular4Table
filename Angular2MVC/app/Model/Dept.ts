export interface IDept {
    DeptID: number,
    DeptName: string,
    Employees: IEmp[],
    IsShow: boolean
}

export interface IDept1 {
    DeptID: number,
    DeptName: string,
}

export interface IEmp {
    EmpID: number,
    EmpName: string,
    DeptID: number,
    Salary: number
}