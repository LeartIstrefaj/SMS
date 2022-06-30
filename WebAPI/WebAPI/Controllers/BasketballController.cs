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
    public class BasketballController : ControllerBase
    {
        private readonly IWebHostEnvironment _env;
        private readonly IConfiguration _configuration;

        public BasketballController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                select BasketballId  , ProductBasketballName  , Type ,SerialNumber ,Color  ,Price  from dbo.Basketball";
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
        public JsonResult Post(Basketball bas)
        {
            string query = @"
                insert into dbo.Jewerly
            (ProductBasketballName  , Type , SerialNumber,Color  ,Price )
                values
                ('" + bas.ProductBasketballName + @"'
                ,'" + bas.Type + @"'
                ,'" + bas.SerialNumber + @"'
                ,'" + bas.Color + @"'
                ,'" + bas.Price + @"')
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
        public JsonResult Put(Basketball bas)
        {
            string query = @"
               update dbo.Basketball set 
               ProductBasketballName    = '" + bas.ProductBasketballName + @"'
                ,Type  = '" + bas.Type + @"'
                ,SerialNumber   = '" + bas.SerialNumber + @" '
                ,Color   = '" + bas.Color + @" '
                ,Price   = '" + bas.Price + @" '
               where BasketballId   = " + bas.BasketballId + @"
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
               delete from dbo.Basketball
               where BasketballId   = " + id + @"
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

