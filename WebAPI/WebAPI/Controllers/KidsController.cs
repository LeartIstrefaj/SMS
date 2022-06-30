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
    public class KidsController : ControllerBase
    {

        private readonly IWebHostEnvironment _env;
        private readonly IConfiguration _configuration;

        public KidsController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                select KidsId, ProductKidsName , Type,Size ,SerialNumber ,Color ,Price from dbo.Kids";
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
        public JsonResult Post(Kids k)
        {
            string query = @"
                insert into dbo.Kids
            (ProductKidsName , Type ,Size , SerialNumber,Color  ,Price )
                values
                ('" + k.ProductKidsName + @"'
                ,'" + k.Type + @"'
                ,'" + k.Size + @"'
                ,'" + k.SerialNumber + @"'
                ,'" + k.Color + @"'
                ,'" + k.Price + @"')
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
        public JsonResult Put(Kids k)
        {
            string query = @"
               update dbo.Kids set 
               ProductKidsName     = '" + k.ProductKidsName + @"'
                ,Type  = '" + k.Type + @"'
                ,SerialNumber   = '" + k.SerialNumber + @" '
                ,Color   = '" + k.Color + @" '
                ,Price   = '" + k.Price + @" '
               where KidsId     = " + k.KidsId + @"
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
               delete from dbo.Kids
               where KidsId = " + id + @"
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
