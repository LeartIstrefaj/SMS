using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using WebAPI.Models;
using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SkiingController : ControllerBase
    {
        private readonly IWebHostEnvironment _env;
        private readonly IConfiguration _configuration;

        public SkiingController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                select SkiingId  , ProductSkiName  , Type ,SerialNumber ,Color ,Price from dbo.Skiing";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("SMSCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);

        }

        [HttpPost]
        public JsonResult Post(Skiing ski)
        {
            string query = @"
                insert into dbo.Skiing
            (ProductSkiName   , Type , SerialNumber,Color  ,Price )
                values
                ('" + ski.ProductSkiName + @"'
                ,'" + ski.Type + @"'
                ,'" + ski.SerialNumber + @"'
                ,'" + ski.Color + @"'
                ,'" + ski.Price + @"')
                ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("SMSCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }

                return new JsonResult("Added Successfully");
            }
        }

        [HttpPut]
        public JsonResult Put(Skiing ski)
        {
            string query = @"
               update dbo.Skiing set 
               ProductSkiName   = '" + ski.ProductSkiName + @"'
                ,Type  = '" + ski.Type + @"'
                ,SerialNumber   = '" + ski.SerialNumber + @" '
                ,Color   = '" + ski.Color + @" '
                ,Price   = '" + ski.Price + @" '
               where SkiingId    = " + ski.SkiingId + @"
               ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("SMSCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }

                return new JsonResult("Update Successfully");
            }
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
               delete from dbo.Skiing
               where SkiingId     = " + id + @"
               ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("SMSCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }

                return new JsonResult("Deleted Successfully");
            }
        }
    }
}
