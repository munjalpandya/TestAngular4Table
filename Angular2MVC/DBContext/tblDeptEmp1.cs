using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Angular2MVC.DBContext
{
    public class tblDeptEmp1
    {
        public tblDeptMaster DeptMaster { get; set; }
        public tblEmpMaster[] EmpMaster { get; set;  }
    }
}