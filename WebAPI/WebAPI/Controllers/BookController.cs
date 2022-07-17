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
    public class BookController : Controller
    {


        private readonly IWebHostEnvironment _env;
        private readonly IConfiguration _configuration;
        public BookController(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                select BookId, BookName, IsbnCode,Author,Price from dbo.Books";
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
        public JsonResult Post(Book cat)
        {
            string query = @"
                insert into dbo.Books
            (BookName, IsbnCode, Author,Price)
                values
                ('" + cat.BookName + @"'
                ,'" + cat.IsbnCode + @"'
                ,'" + cat.Author + @"'
                ,'" + cat.Price + @"' )
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
        public JsonResult Put(Book cat)
        {
            string query = @"
               update dbo.Books set 
               BookName = '" + cat.BookName + @"'
                ,IsbnCode = '" + cat.IsbnCode + @"'
                ,Author = '" + cat.Author + @" '
                ,Price = '" + cat.Price + @" '
               where BookId = " + cat.BookId + @"
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
               delete from dbo.Books
               where BookId = " + id + @"
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
