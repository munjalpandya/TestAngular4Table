export interface IDept {
    DeptID: number,
    DeptName: string,
    Employees: IEmp[]
}

export interface IEmp {
    EmpID: number,
    EmpName: string,
    DeptID: number,
    Salary: number
}