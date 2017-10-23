using Angular2MVC.DBContext;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace Angular2MVC.Controllers
{
    public class MenuAPIController : BaseAPIController
    {
        public HttpResponseMessage Get()
        {
            return ToJson(UserDB.tblMenuMasters.Where(x => x.ParentMenuID == 0).AsEnumerable());
            // return ErrorJson(UserDB.TblUsers.AsEnumerable());  //For Testing
        }

        [Route("api/menuapi/{id}")]
        public HttpResponseMessage GetByID(int id)
        {
            return ToJson(UserDB.tblMenuMasters.Where(x => x.MenuID == id).AsEnumerable());
            // return ErrorJson(UserDB.TblUsers.AsEnumerable());  //For Testing
        }

        public HttpResponseMessage Post([FromBody]tblMenuMaster value)
        {
            UserDB.tblMenuMasters.Add(value);
            return ToJson(UserDB.SaveChanges());
        }

        public HttpResponseMessage Put(int id, [FromBody]tblMenuMaster value)
        {
            UserDB.Entry(value).State = EntityState.Modified;
            return ToJson(UserDB.SaveChanges());
        }
        public HttpResponseMessage Delete(int id)
        {
            UserDB.tblMenuMasters.Remove(UserDB.tblMenuMasters.FirstOrDefault(x => x.MenuID == id));
            return ToJson(UserDB.SaveChanges());
        }
    }
}
