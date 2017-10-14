using Angular2MVC.DBContext;
using System.Data.Entity;
using System.Linq;
using System.Net.Http;
using System.Runtime.Serialization;
using System.Web.Http;
using System.Xml;
using System.Xml.Linq;
using System.Xml.Serialization;

namespace Angular2MVC.Controllers
{
    public class MasterDetailAPIController : BaseAPIController
    {
        public HttpResponseMessage Post(tblDeptEmp value)
        {
            string strXML = ToXML(value);
            
            UserDB.spAdd_DeptEmp(strXML);

            return ToJson(UserDB.SaveChanges());
        }

        
        
    }
}
