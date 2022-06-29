using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Book
    {
        public int BookId { get; set; }
        public string BookName { get; set; }
        public string IsbnCode { get; set; }
        public string Author { get; set; }
        public string Price { get; set; }

    }
}
