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
    public class StokuController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public StokuController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                 select StokuId, EmriProduktit, SasiaEProduktit,Vlera
                  from dbo.Stoku
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
            }
            return new JsonResult(table);
        }


        [HttpPost]
        public JsonResult Post(Stoku pro)
        {
            string query = @"
                insert into dbo.Stoku 
                (EmriProduktit,SasiaEProduktit,Vlera)
                values
                (
                '" + pro.EmriProduktit + @"'
                ,'" + pro.SasiaEProduktit + @"'
                ,'" + pro.Vlera + @"'
             
                )
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
        public JsonResult Put(Stoku pro)
        {
            string query = @"
               update dbo.Stoku set 
               EmriProduktit = '" + pro.EmriProduktit + @"'
               ,SasiaEProduktit = '" + pro.SasiaEProduktit + @"'
               ,Vlera = '" + pro.Vlera + @"'
               where StokuId = " + pro.StokuId + @"
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
               delete from dbo.Stoku
               where StokuId = " + id + @"
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
