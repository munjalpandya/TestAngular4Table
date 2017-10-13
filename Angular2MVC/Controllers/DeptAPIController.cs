using Angular2MVC.DBContext;
using System.Data.Entity;
using System.Linq;
using System.Net.Http;
using System.Web.Http;

namespace Angular2MVC.Controllers
{
    public class DeptAPIController : BaseAPIController
    {
        public HttpResponseMessage Get()
        {
            return ToJson(UserDB.tblDeptMasters.AsEnumerable());
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
