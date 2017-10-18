using Angular2MVC.DBContext;
using Newtonsoft.Json;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Xml.Linq;
using System.Runtime.Serialization;
using System.Data;
using System.Collections.Generic;
using System;

namespace Angular2MVC.Controllers
{
    public class BaseAPIController : ApiController
    {
        protected readonly UserDBEntities UserDB = new UserDBEntities();
        protected HttpResponseMessage ToJson(dynamic obj)
        {
            var response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(JsonConvert.SerializeObject(obj), Encoding.UTF8, "application/json");
            return response;
        }

        protected string ToXML(object obj)
        {
            XDocument doc = new XDocument();
            using (var writer = doc.CreateWriter())
            {
                // write xml into the writer
                var serializer = new DataContractSerializer(obj.GetType());
                serializer.WriteObject(writer, obj);
            }

            string strXML = doc.ToString();
            return strXML;
        }

        protected HttpResponseMessage ErrorJson(dynamic obj)
        {
            var response = Request.CreateResponse(HttpStatusCode.Unauthorized);
            response.Content = new StringContent(JsonConvert.SerializeObject(obj), Encoding.UTF8, "application/json");
            return response;
        }

    }
}
