using Angular2MVC.DBContext;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Script.Serialization;

namespace Angular2MVC.Controllers
{
    public class UserAPIController : BaseAPIController
    {
        public HttpResponseMessage Get()
        {
            return ToJson(UserDB.TblUsers.AsEnumerable());
            // return ErrorJson(UserDB.TblUsers.AsEnumerable());  //For Testing
        }

        [Route("api/userapi/{id}")]
        public HttpResponseMessage GetByID(int id)
        {
            return ToJson(UserDB.TblUsers.Where(x => x.Id == id).AsEnumerable());
            // return ErrorJson(UserDB.TblUsers.AsEnumerable());  //For Testing
        }

        [Route("api/usersearchapi/{searchText}")]
        public HttpResponseMessage GetByText(string searchText)
        {
            var query = (from um in UserDB.TblUsers
                         where (searchText == "nodata" || um.FirstName.Contains(searchText))
                            && (searchText == "nodata" || um.LastName.Contains(searchText))
                         select new
                         {
                             FirstName = um.FirstName,
                             LastName = um.LastName,
                             DOB = um.DOB
                         });
            return ToJson(query);
            // return ErrorJson(UserDB.TblUsers.AsEnumerable());  //For Testing
        }

        public HttpResponseMessage Post([FromBody]TblUser value)
        {
            var httpRequest = HttpContext.Current.Request;

            if (httpRequest.Files.Count > 0)
            {
                var postedFile = httpRequest.Files[0];
                var filePath = HttpContext.Current.Server.MapPath("~/images/" + postedFile.FileName);
            }

            UserDB.TblUsers.Add(value);             
            return ToJson(UserDB.SaveChanges());
        }

        public HttpResponseMessage Put(int id, [FromBody]TblUser value)
        {
            UserDB.Entry(value).State = EntityState.Modified;
            return ToJson(UserDB.SaveChanges());
        }
        public HttpResponseMessage Delete(int id)
        {
            UserDB.TblUsers.Remove(UserDB.TblUsers.FirstOrDefault(x => x.Id == id));
            return ToJson(UserDB.SaveChanges());
        }

        [HttpPost]
        [Route("api/uploadpic")]
        public HttpResponseMessage UploadPic()
        {
            var httpRequest = HttpContext.Current.Request;
            
            if (httpRequest.Files.Count > 0)
            {
                var postedFile = httpRequest.Files[0];
                var filePath = HttpContext.Current.Server.MapPath("~/images/" + postedFile.FileName);
                postedFile.SaveAs(filePath);
            }

            return ToJson(UserDB.SaveChanges());
        }

        [HttpPost]
        [Route("api/userapi/postwithfile")]
        public HttpResponseMessage PostWithFile()
        {
            var httpRequest = HttpContext.Current.Request;
            JavaScriptSerializer json_serializer = new JavaScriptSerializer();
            TblUser value = new TblUser();
            value = JsonConvert.DeserializeObject<TblUser>(httpRequest.Params["Data"].ToString().Replace("null","0"));
            string strFileExtension = "";
            string strFileName = System.Guid.NewGuid().ToString();
            
            if (httpRequest.Files.Count > 0)
            {
                var postedFile = httpRequest.Files[0];
                strFileExtension = Path.GetExtension(postedFile.FileName);
                var filePath = HttpContext.Current.Server.MapPath("~/images/" + strFileName + strFileExtension);
                value.UserPic = strFileName + strFileExtension;
                postedFile.SaveAs(filePath);
            }

            UserDB.TblUsers.Add(value);
            return ToJson(UserDB.SaveChanges());
        }
    }
}
