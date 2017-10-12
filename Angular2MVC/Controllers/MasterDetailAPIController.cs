using Angular2MVC.DBContext;
using System.Data.Entity;
using System.Linq;
using System.Net.Http;
using System.Web.Http;

namespace Angular2MVC.Controllers
{
    public class MasterDetailAPIController : BaseAPIController
    {
        public HttpResponseMessage Post(string strJSON)
        {
            return ToJson(strJSON);
        }
    }
}
