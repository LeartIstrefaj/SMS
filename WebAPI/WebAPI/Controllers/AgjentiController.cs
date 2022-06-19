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
public class AgjentiController : ControllerBase

{
    private readonly IWebHostEnvironment _env;
    private readonly IConfiguration _configuration;

    public AgjentiController(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    [HttpGet]
    public JsonResult Get()
    {
        string query = @"
                select AgjentiId, AgjentiName, AgjentiSurname,Qyteti from dbo.Agjenti";
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
    public JsonResult Post(Agjenti cat)
    {
        string query = @"
                insert into dbo.Agjenti
            (AgjentiName, AgjentiSurname, Qyteti)
                values
                ('" + cat.AgjentiName + @"'
                ,'" + cat.AgjentiSurname + @"'
                ,'" + cat.Qyteti + @"')
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
    public JsonResult Put(Agjenti cat)
    {
        string query = @"
               update dbo.Agjenti set 
               AgjentiName = '" + cat.AgjentiName + @"'
                ,AgjentiSurname = '" + cat.AgjentiSurname + @"'
                ,Qyteti = '" + cat.Qyteti + @" '
               where AgjentiId = " + cat.AgjentiId + @"
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
               delete from dbo.Agjenti
               where AgjentiId = " + id + @"
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




