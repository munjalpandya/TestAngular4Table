﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Angular2MVC.DBContext
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class UserDBEntities : DbContext
    {
        public UserDBEntities()
            : base("name=UserDBEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<TblUser> TblUsers { get; set; }
        public virtual DbSet<tblDeptMaster> tblDeptMasters { get; set; }
        public virtual DbSet<tblEmpMaster> tblEmpMasters { get; set; }
        public virtual DbSet<tblMenuMaster> tblMenuMasters { get; set; }
        public virtual DbSet<tblPageMaster> tblPageMasters { get; set; }
    
        public virtual ObjectResult<string> spAdd_DeptEmp(string pstrRequestXML)
        {
            var pstrRequestXMLParameter = pstrRequestXML != null ?
                new ObjectParameter("pstrRequestXML", pstrRequestXML) :
                new ObjectParameter("pstrRequestXML", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<string>("spAdd_DeptEmp", pstrRequestXMLParameter);
        }
    }
}
