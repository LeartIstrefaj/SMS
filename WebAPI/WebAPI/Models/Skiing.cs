using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Skiing
    {
        public int SkiingId { get; set; }
        public string ProductSkiName { get; set; }
        public string Type { get; set; }
        public int SerialNumber { get; set; }
        public string Color { get; set; }
        public string Price { get; set; }
    }
}
