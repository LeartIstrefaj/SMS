using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Tv
    {
        public int TvId { get; set; }
        public string TvName { get; set; }

        public string SerialKey { get; set; }
        public string Price { get; set; }
        public string Type { get; set; }

    }
}
