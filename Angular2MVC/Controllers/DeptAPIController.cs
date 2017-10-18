using Angular2MVC.DBContext;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using Angular2MVC.Modules;

namespace Angular2MVC.Controllers
{
    public class DeptAPIController : BaseAPIController
    {
        public HttpResponseMessage Get()
        {
            tblDeptEmp1 objDeptEmp = new tblDeptEmp1();
            
            var deps = (from dm in UserDB.tblDeptMasters
                        select new
                        {
                            DeptID = dm.DeptID,
                            DeptName = dm.DeptName,
                            Employees = (from em in UserDB.tblEmpMasters
                                         where (em.DeptID == dm.DeptID)
                                         select new
                                         {
                                             EmpID = em.EmpID,
                                             EmpName = em.EmpName,
                                             DeptID = em.DeptID,
                                             Salary = em.Salary
                                         })
                        });

            return ToJson(deps);
            
        }

        [Route("api/deptapi/emp")]
        public HttpResponseMessage GetEmp()
        {
            return ToJson(UserDB.tblEmpMasters.AsEnumerable());
            // return ErrorJson(UserDB.TblUsers.AsEnumerable());  //For Testing
        }

        public HttpResponseMessage Post([FromBody]tblDeptMaster value)
        {
            UserDB.tblDeptMasters.Add(value);
            return ToJson(UserDB.SaveChanges());
        }

        public HttpResponseMessage Put(int id, [FromBody]tblDeptMaster value)
        {
            UserDB.Entry(value).State = EntityState.Modified;
            return ToJson(UserDB.SaveChanges());
        }
        public HttpResponseMessage Delete(int id)
        {
            UserDB.tblDeptMasters.Remove(UserDB.tblDeptMasters.FirstOrDefault(x => x.DeptID == id));
            return ToJson(UserDB.SaveChanges());
        }
    }
}
