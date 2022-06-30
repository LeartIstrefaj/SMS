using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Jewerly
    {
        public int JewerlyId { get; set; }
        public string JewerlyName { get; set; }
        public string Type { get; set; }
        public int UniqueCode { get; set; }
        public string Price { get; set; }
    }
}
