using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Basketball
    {
        public int BasketballId { get; set; }
        public string ProductBasketballName { get; set; }
        public string Type { get; set; }
        public int SerialNumber { get; set; }
        public string Color { get; set; }
        public string Price { get; set; }
    }
}
