using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Angular2MVC.DBContext
{
    public class tblDeptEmp
    {
        public int DeptID { get; set; }
        public string DeptName { get; set; }
        public tblEmp[] Employees { get; set; }
    }

    public class tblEmp
    {
        public int EmpID { get; set; }
        public string EmpName { get; set; }
        public int DeptID { get; set; }
        public decimal Salary { get; set; }
    }

}